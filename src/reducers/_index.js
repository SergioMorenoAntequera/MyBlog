import { combineReducers } from "redux";
import { usersReducer } from "reducers/usersReducer";
import { postsReducer } from "reducers/postsReducer";
import commentsReducer from "features/commentsSlice";
import reactionsReducer from "features/reactionsSlice";

export default combineReducers({
    usersEntity : usersReducer,
    postsEntity : postsReducer,
    commentsEntity : commentsReducer,
    reactionsEntity : reactionsReducer,
})