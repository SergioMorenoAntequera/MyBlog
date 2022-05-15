import {ADD_POST, ADD_POST_MAIN_FEED, ADD_POST_USER_FEED, CLEAR_POST_USER_FEED, DELETE_POST, UPDATE_POST} from "actions/postsActionTypes";
import CommentsApi from "api/commentsAPI";
import LinesAPI from "api/linesAPI";
import * as PostsAPI from 'api/posts'
import ReactionsAPI from "api/reactionsAPI";
import CommentsThunks from "features/commentsThunks";
import LinesThunks from "features/linesThunks";
import ReactionsThunks from "features/reactionsThunks";
import Line from "types/lineTypes";

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
    PostsAPI.createNew(newPost)
    
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
    PostsAPI.updatePost(post)
    
    dispatch({
        type: UPDATE_POST,
        payload: post
    })

    return post
}
export const deletePost = (postId) => async (dispatch) => {
    if(!postId) return
    PostsAPI.deletePost(postId)
    
    CommentsApi.getByPost(postId).then(comments => comments.forEach(c=>dispatch(CommentsThunks.removeComment(c))))
    ReactionsAPI.getByPost(postId).then(reactions => reactions.forEach(r=>dispatch(ReactionsThunks.removeReaction(r))))
    LinesAPI.getByPost(postId).then(lines => lines.forEach(l=>dispatch(LinesThunks.removeLine(l))))

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

