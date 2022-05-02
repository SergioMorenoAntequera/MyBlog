import {ADD_POST, ADD_POST_MAIN_FEED, ADD_POST_USER_FEED, CLEAR_POST_USER_FEED, DELETE_POST, UPDATE_POST} from "actions/postsActionTypes";
import * as PostsAPI from 'api/posts'
import CommentsThunks from "features/commentsThunks";
import { addLine } from "features/linesSlice";
import LinesThunks from "features/linesThunks";
import ReactionsThunks from "features/reactionsThunks";
import Line, { LineTypes } from "types/lineTypes";

export const fetchPostRelated = (postId) => {
    LinesThunks.fetchLinesByPost(postId)
    CommentsThunks.fetchCommentsByPost(postId)
    ReactionsThunks.fetchReactionsByPost(postId)
}

export const getMainFeed = () => async (dispatch) => {
    var recentPosts = await PostsAPI.getRecent()

    recentPosts.forEach(post => {
        fetchPostRelated(post.id)
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
        fetchPostRelated(post.id)
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

export const createPost = (newPost) => async (dispatch) => {
    if(!newPost.userId) return
    PostsAPI.createNew(newPost.userId, newPost)
    
    var initialLine = new Line(newPost.id)
    dispatch(LinesThunks.createLine(initialLine))

    dispatch({
        type: ADD_POST,
        payload: newPost
    })
    dispatch({
        type: ADD_POST_USER_FEED,
        payload: newPost.id
    })
    dispatch({
        type: ADD_POST_MAIN_FEED,
        payload: newPost.id
    })
    
    return newPost
}
export const updatePost = (post) => async (dispatch) => {
    if(!post) return
    var updatedPost = await PostsAPI.updatePost(post)
    
    dispatch({
        type: UPDATE_POST,
        payload: updatedPost
    })

    return updatedPost
}
export const deletePost = (postId) => async (dispatch) => {
    if(!postId) return
    PostsAPI.deletePost(postId)
    
    dispatch({
        type: DELETE_POST,
        payload: postId
    })

    return postId
}

export const getById = (postId) => async (dispatch) => {
    if(!postId) return
    var fetchedPost = await PostsAPI.getById(postId)
    if(fetchedPost.length === 0) return

    fetchPostRelated(postId)
    
    dispatch({
        type: ADD_POST,
        payload: fetchedPost[0]
    }) 
}

const usersActions = {getMainFeed, getUserFeed, clearUserFeed, createPost, getById}
export default usersActions

