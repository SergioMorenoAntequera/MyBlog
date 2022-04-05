import { combineReducers } from "redux";
import { usersReducer } from "reducers/usersReducer";
import { postsReducer } from "reducers/postsReducer";
import { reactionsReducer } from "./reactiosReducer";
import commentsReducer from "features/commentsSlice";

export default combineReducers({
    usersEntity : usersReducer,
    postsEntity : postsReducer,
    commentsEntity : commentsReducer,
    reactionsEntity : reactionsReducer,
})