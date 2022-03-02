import {SET_BY_USER, ON_LOADING, ON_ERROR, ADD_POST} from "actions/postsActionTypes";

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
        allIds: []
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

        default : return state
    }

    function translatePost(flatPost) {
        if(state.posts.allIds.includes(flatPost?.id)) {
            return state.posts
        }
        
            

        console.log(flatPost)
        // var posts = [...state.posts].map(p=>p.id)
        // var index = posts.indexOf(postToUpdate?.id)
        // if(index === -1) return state.posts
        // posts[index] = postToUpdate
        // return posts
    }

    const states = {
        
        [SET_BY_USER]: {
            ...state,
            posts: action.payload,
            loading: false,
            error: "",
        },
        [ON_LOADING]: {
            ...state,
            loading: true,
        },
        [ON_ERROR]: {
            ...state,
            loading: false,
            error: action.payload,
        }
    };
    return states[action.type] ?? state;
}