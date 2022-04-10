import { combineReducers } from "redux";
import { postsReducer } from "reducers/postsReducer";
import commentsReducer from "features/commentsSlice";
import reactionsReducer from "features/reactionsSlice";
import usersReducer from "features/usersSlice";

export default combineReducers({
    usersEntity : usersReducer,
    postsEntity : postsReducer,
    commentsEntity : commentsReducer,
    reactionsEntity : reactionsReducer,
})