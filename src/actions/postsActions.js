import {SET_ALL, ON_LOADING, ON_ERROR} from "types/postsActionTypes";
import axios from "axios"

export const getAllPosts = (userId) => async (dispatch) => {
    if(!userId) return;
    
    dispatch({type: ON_LOADING})

    try {
        var response = await axios(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        dispatch({
            type: SET_ALL,
            payload: response.data
        })                
    } catch(error) {
        dispatch({
            type: ON_ERROR,
            payload: error.message
        })
    }
}