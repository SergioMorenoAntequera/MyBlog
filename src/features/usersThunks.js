
import UsersApi from "api/usersAPI"
import { addUser } from "./usersSlice"
const { createAsyncThunk } = require("@reduxjs/toolkit")

const createUser = createAsyncThunk(
    'users/createUser',
    async (newUser, {dispatch}) => {
        if(!newUser) return
        var newUserCreated = await UsersApi.createNew(newUser)
        dispatch(addUser(newUserCreated))
    }
)

const fetchUserByUid = createAsyncThunk(
    'users/fetchUserByUid',
    async (userUid, {dispatch}) => {
        if(!userUid) return
        
        var fetchedUser = await UsersApi.getByUid(userUid)
        dispatch(addUser(fetchedUser[0]))
    }
)

const UsersThunks = {
    fetchUserByUid,
    createUser
}
export default UsersThunks