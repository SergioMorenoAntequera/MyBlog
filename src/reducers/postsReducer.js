import {SET_BY_USER, ON_LOADING, ON_ERROR, ADD_POST, ADD_POST_MAIN_FEED, ADD_POST_USER_FEED} from "actions/postsActionTypes";

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
                        [payload.id]: {
                            "id": payload.id,
                            "body": payload.body,
                            "createdAt": payload.createdAt
                        }
                    },
                    allIds: [
                        ...state.posts.allIds,
                        payload.id
                    ]
                }
            }
        }
        case ADD_POST_MAIN_FEED : {
            if(state.posts.mainFeed.includes(payload)) return state
            
            return {
                ...state,
                posts: {
                    ...state.posts,
                    mainFeed: addUnique(state.posts.mainFeed, action.payload)
                }
            }
        }
        case ADD_POST_USER_FEED : {
            if(state.posts.userFeed.includes(payload)) return state
            
            return {
                ...state,
                posts: {
                    ...state.posts,
                    userFeed: addUnique(state.posts.userFeed, action.payload)
                }
            }
        }

        default : return state
    }

    function addUnique(array, el) {
        if(array.includes(el)) {
            return array
        } else {
            return [...array, el]
        }
    }
}