import {SET_ALL, SET_ONE, ON_LOADING, ON_ERROR} from "types/usersActionTypes";
import { getAllPosts } from 'actions/postsActions'
import axios from "axios"

export const getAllUsers = () => async (dispatch) => {
    dispatch({type: ON_LOADING})
    
    try {
        var response = await axios("https://jsonplaceholder.typicode.com/users")
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

export const getOneUser = (userId) => async (dispatch) => {
    dispatch({type: ON_LOADING})
    
    try {
        var response = await axios("https://jsonplaceholder.typicode.com/users/" + userId)
        dispatch({
            type: SET_ONE,
            payload: response.data
        }) 
    } catch(error) {
        dispatch({
            type: ON_ERROR,
            payload: error.message
        })
    }
}