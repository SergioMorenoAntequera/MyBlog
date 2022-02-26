import {SET_ALL, SET_ONE, ON_LOADING, ON_ERROR} from "types/usersActionTypes";
import { 
    getAllUsers as getAllUsersAPI,
    getOneUser as getOneUserAPI
} from "api/requests";

export const getAllUsers = () => async (dispatch) => {
    dispatch({type: ON_LOADING})
    
    getAllUsersAPI().then(response => {
        dispatch({
            type: SET_ALL,
            payload: response.data
        })
    }).catch(error => {
        dispatch({
            type: ON_ERROR,
            payload: error.message
        })
    })
}

export const getOneUser = (userId) => async (dispatch) => {
    dispatch({type: ON_LOADING})

    getOneUserAPI(userId).then(response => {
        dispatch({
            type: SET_ONE,
            payload: response.data[0]
        }) 
    }).catch(error => {
        dispatch({
            type: ON_ERROR,
            payload: error.message
        })
    })
}