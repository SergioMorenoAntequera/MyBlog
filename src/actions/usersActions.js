import {SET_ALL, SET_ONE, ON_LOADING, ON_ERROR, ADD_USER} from "actions/usersActionTypes";
import * as UsersAPI from 'api/users'
import { 
    getAllUsers as getAllUsersAPI,
    getOneUser as getOneUserAPI
} from "api/requests";


export const createUser = (newUser) => async (dispatch) => {
    if(!newUser) return
    var newUserCreated = await UsersAPI.createNew(newUser)
    
    dispatch({
        type: ADD_USER,
        payload: newUserCreated
    })
}

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