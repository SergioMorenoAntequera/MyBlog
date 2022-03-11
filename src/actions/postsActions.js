import {ADD_POST, ADD_POST_MAIN_FEED, ADD_POST_USER_FEED, CLEAR_POST_USER_FEED} from "actions/postsActionTypes";
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
export const clearUserFeed = () => async (dispatch) => {
    dispatch({
        type: CLEAR_POST_USER_FEED
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
export const getById = (postId) => async (dispatch) => {
    if(!postId) return
    var fetchedPost = await PostsAPI.getById(postId)
    if(fetchedPost.length === 0) return
    
    dispatch({
        type: ADD_POST,
        payload: fetchedPost[0]
    }) 
}

