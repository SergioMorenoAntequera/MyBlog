import {SET_USERS, ON_LOADING, ON_ERROR} from "types/usersActionTypes";
import axios from "axios"

export const getAllUsers = () => async (dispatch) => {
    dispatch({type: ON_LOADING})

    
    setTimeout(async() => {
        try {
            var response = await axios("https://jsonplaceholder.typicode.com/users")
            dispatch({
                type: SET_USERS,
                payload: response.data
            })                
        } catch(error) {
            dispatch({
                type: ON_ERROR,
                payload: error.message
            })
        }
    }, 500);
}