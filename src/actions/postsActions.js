import {SET_BY_USER, ON_LOADING, ON_ERROR, UPDATE_POST, ADD_POST, ADD_POST_MAIN_FEED, ADD_POST_USER_FEED} from "actions/postsActionTypes";

import { 
    getPostByUser as getPostByUserAPI,
    getCommentsByPost as getCommentsByPostAPI 
} from "api/requests";

import * as PostsAPI from 'api/posts'

export const getMainFeed = () => async (dispatch) => {
    var recentPosts = await PostsAPI.getRecent()

    recentPosts.forEach(post => {
        dispatch({
            type: ADD_POST,
            payload: post
        })
        dispatch({
            type: ADD_POST_MAIN_FEED,
            payload: post.id
        })
    })
}
export const getUserFeed = (userId) => async (dispatch) => {
    if(!userId) return
    var recentPosts = await PostsAPI.getByUser(userId)
    
    console.log(recentPosts)
    recentPosts.forEach(post => {
        dispatch({
            type: ADD_POST,
            payload: post
        })
        dispatch({
            type: ADD_POST_USER_FEED,
            payload: post.id
        })
    })
}
export const createPost = (userId, newPost) => async (dispatch) => {
    if(!userId) return
    var newPostCreated = await PostsAPI.createNew(userId, newPost)

    dispatch({
        type: ADD_POST,
        payload: newPostCreated
    })
    dispatch({
        type: ADD_POST_USER_FEED,
        payload: newPostCreated.id
    })
}




export const getPostsByUser = (userId) => async (dispatch, getState) => {
    if(!userId) return;
    dispatch({type: ON_LOADING})

    getPostByUserAPI(userId).then(response => {
        let newPosts = {
            "userId": userId, 
            posts: response.data.map(p=> ({...p, comments:[], commentsLoading: false, open:false}))
        }
        let savedPosts = getState().postsReducer.posts

        dispatch({
            type: SET_BY_USER,
            payload: [...savedPosts, newPosts]
        }) 

    }).catch(error => {
        dispatch({
            type: ON_ERROR,
            payload: error.message
        })
    })
}

export const toggleOpenComments = (post) => async (dispatch, getState) => { 
    post.open = !post.open
    dispatch({
        type: UPDATE_POST,
        payload: post
    })
    
    if(!post.comments.length)
        dispatch(getCommentByPost(post))
}

export const getCommentByPost = (post) => async (dispatch) => { 
    
    post.commentsLoading = true
    dispatch({
        type: UPDATE_POST,
        payload: post
    })

    getCommentsByPostAPI(post.id).then(response => {
        post.comments = response.data
        post.commentsLoading = false
        dispatch({
            type: UPDATE_POST,
            payload: post
        })
    }).catch(error => {
        dispatch({
            type: ON_ERROR,
            payload: error.message
        })
    })
}


