import {SET_BY_USER, ON_LOADING, ON_ERROR, UPDATE_POST} from "actions/postsActionTypes";

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: "",
}

export function postsReducer(state = INITIAL_STATE, action) {
    
    function updatePost(postToUpdate) {
        var posts = [...state.posts].map(p=>p.id)
        var index = posts.indexOf(postToUpdate?.id)
        if(index === -1) return state.posts
        posts[index] = postToUpdate
        return posts
    }

    const states = {
        [SET_BY_USER]: {
            ...state,
            posts: action.payload,
            loading: false,
            error: "",
        },
        [UPDATE_POST]: {
            ...state,
            posts: updatePost(action.payload),
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