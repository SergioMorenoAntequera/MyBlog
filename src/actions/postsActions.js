import {SET_ALL, ON_LOADING, ON_ERROR} from "types/postsActionTypes";
import axios from "axios"


export const getPostsByUser = (userId) => async (dispatch) => {
    if(!userId) return;
    
    
    dispatch({type: ON_LOADING})

    try {
        var response = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
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
