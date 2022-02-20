import axios from "axios"
import { usersActionTypes } from "types/usersActionTypes"

export const getAllUsers = () => async (dispatch) => {

    var response = await axios("https://jsonplaceholder.typicode.com/users")
    
    dispatch({
        type: usersActionTypes.setUsers,
        payload: response.data
    })
}