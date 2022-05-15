import {ADD_POST, ADD_POST_MAIN_FEED, ADD_POST_USER_FEED, CLEAR_POST_USER_FEED, DELETE_POST, UPDATE_POST} from "actions/postsActionTypes";
import { PostStatus } from "types/postTypes";
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
        case UPDATE_POST: {
            if(!state.posts.allIds.includes(payload.id)) return state;
            return {
                ...state,
                posts: {
                    ...state.posts,
                    byId: {
                        ...state.posts.byId,
                        [payload.id]: payload
                    }
                }
            }
        }
        case DELETE_POST: {
            if(!state.posts.allIds.includes(payload)) return state
            const deletedPostId = payload
            return {
                ...state,
                posts: {
                    ...state.posts,
                    byId: {
                        ...state.posts.byId,
                        [deletedPostId]: undefined
                    },
                    allIds: state.posts.allIds.filter(it => it !== deletedPostId),
                    mainFeed: state.posts.mainFeed.filter(it => it !== deletedPostId),
                    userFeed: state.posts.userFeed.filter(it => it !== deletedPostId)
                }
            }
        }
        
        case ADD_POST_MAIN_FEED : {
            let postId = action.payload
            if(!state.posts.byId[postId]) return state;
            if(state.posts.byId[postId].status !== PostStatus.PUBLIC) return state;
            
            return {
                ...state,
                posts: {
                    ...state.posts,
                    mainFeed: addUnique(state.posts.mainFeed, action.payload, Positions.beggining)
                }
            }
        }
        case ADD_POST_USER_FEED : {
            let postId = action.payload
            if(!state.posts.byId[postId]) return state;
            // if(state.posts.byId[postId].status !== PostStatus.PUBLIC) return state;
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