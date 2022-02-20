import {SET_ALL, ON_LOADING, ON_ERROR} from "types/postsActionTypes";

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: "",
}

export function postsReducer(state = INITIAL_STATE, action) {
    const states = {
        [SET_ALL]: {
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