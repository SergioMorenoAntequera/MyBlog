import {SET_BY_USER, ON_LOADING, ON_ERROR} from "types/postsActionTypes";
import axios from "axios"


export const getPostsByUser = (userId) => async (dispatch, getState) => {
    if(!userId) return;
    let savedPosts = getState().postsReducer.posts
    
    dispatch({type: ON_LOADING})

    try {
        var response = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

        dispatch({
            type: SET_BY_USER,
            payload: [...savedPosts, {"userId": userId, posts: response.data}]
        })                
    } catch(error) {
        dispatch({
            type: ON_ERROR,
            payload: error.message
        })
    }
}

export const getCommentByPost = (postId) => async (dispatch) => { 
    
}