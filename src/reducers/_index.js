import { combineReducers } from "redux";
import { usersReducer } from "reducers/usersReducer";
import { postsReducer } from "reducers/postsReducer";
import { commentsReducer } from "reducers/commentsReducer";

export default combineReducers({
    usersEntity : usersReducer,
    postsEntity : postsReducer,
    commentsEntity : commentsReducer,
})