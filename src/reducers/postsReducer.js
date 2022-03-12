import {ADD_POST, ADD_POST_MAIN_FEED, ADD_POST_USER_FEED, CLEAR_POST_USER_FEED} from "actions/postsActionTypes";
import { addMainRecord, addUnique, Positions } from "utils/reducers";

const INITIAL_STATE = {
    posts: {
        byId: {
            // "0": {
            //     id: "0",
            //     body: "",
            //     createdAt: "",
                // author: "",
                // comments: [""]
            // }
        },
        allIds: [],
        mainFeed: [],
        userFeed: []
    },
    loading: false,
    error: "",
}

export function postsReducer(state = INITIAL_STATE, action) {
    const payload = action.payload;
    switch (action.type) {

        case ADD_POST : {
            if(state.posts.allIds.includes(payload.id)) return state
            
            return {
                ...state,
                posts: {
                    ...state.posts,
                    byId: {
                        ...state.posts.byId,
                        ...addMainRecord(payload)
                    },
                    allIds: addUnique(state.posts.allIds, action.payload.id)
                }
            }
        }
        case ADD_POST_MAIN_FEED : {
            return {
                ...state,
                posts: {
                    ...state.posts,
                    mainFeed: addUnique(state.posts.mainFeed, action.payload, Positions.beggining)
                }
            }
        }
        case ADD_POST_USER_FEED : {
            return {
                ...state,
                posts: {
                    ...state.posts,
                    userFeed: addUnique(state.posts.userFeed, action.payload, Positions.beggining)
                }
            }
        }
        case CLEAR_POST_USER_FEED : {
            return {
                ...state,
                posts: {
                    ...state.posts,
                    userFeed: [],
                }
            }
        }

        default : return state
    }
}