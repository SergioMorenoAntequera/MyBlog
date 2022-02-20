import { combineReducers } from "redux";
import { usersReducer } from "reducers/usersReducer";
import { postsReducer } from "reducers/postsReducer";

export default combineReducers({
    usersReducer,
    postsReducer
})