import { ADD_USER } from "actions/usersActionTypes";
import * as UsersAPI from 'api/users'

export const createUser = (newUser) => async (dispatch) => {
    if(!newUser) return
    var newUserCreated = await UsersAPI.createNew(newUser)
    
    dispatch({
        type: ADD_USER,
        payload: newUserCreated
    })
}

export const getUserByUid = (useUid) => async (dispatch) => {
    if(!useUid) return
    var fetchedUser = await UsersAPI.getByUid(useUid)

    dispatch({
        type: ADD_USER,
        payload: fetchedUser[0]
    })
}

const usersActions = {createUser, getUserByUid}
export default usersActions


