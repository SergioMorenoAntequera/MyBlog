import axios from "axios"
import { usersActionTypes } from "reducers/usersReducer"

export const getAllUsers = () => async (dispatch) => {

    var response = await axios("https://jsonplaceholder.typicode.com/users")
    
    dispatch({
        type: usersActionTypes.setUsers,
        payload: response.data
    })
}