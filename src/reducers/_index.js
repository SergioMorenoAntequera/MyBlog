import { combineReducers } from "redux";
import { usersReducer } from "reducers/usersReducer";
import { postsReducer } from "reducers/postsReducer";
import { commentsReducer } from "reducers/commentsReducer";
import { reactionsReducer } from "./reactiosReducer";

export default combineReducers({
    usersEntity : usersReducer,
    postsEntity : postsReducer,
    commentsEntity : commentsReducer,
    reactionsEntity : reactionsReducer,
})