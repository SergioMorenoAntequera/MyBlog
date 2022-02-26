import {SET_BY_USER, ON_LOADING, ON_ERROR, UPDATE_POST} from "types/postsActionTypes";
import axios from "axios"


export const getPostsByUser = (userId) => async (dispatch, getState) => {
    if(!userId) return;
    dispatch({type: ON_LOADING})

    try {
        var response = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        let newPosts = {
            "userId": userId, 
            posts: response.data.map(p=> ({...p, comments:[], commentsLoading: false, open:false}))
        }
        let savedPosts = getState().postsReducer.posts

        dispatch({
            type: SET_BY_USER,
            payload: [...savedPosts, newPosts]
        })                
    } catch(error) {
        dispatch({
            type: ON_ERROR,
            payload: error.message
        })
    }
}

export const toggleOpenComments = (post) => async (dispatch, getState) => { 
    post.open = !post.open
    dispatch({
        type: UPDATE_POST,
        payload: post
    })
    
    dispatch(getCommentByPost(post))
}

export const getCommentByPost = (post) => async (dispatch) => { 
    
    post.commentsLoading = true
    dispatch({
        type: UPDATE_POST,
        payload: post
    })

    const commentsResponse = await axios(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    post.comments = commentsResponse.data
    post.commentsLoading = false
    dispatch({
        type: UPDATE_POST,
        payload: post
    })
    
}


