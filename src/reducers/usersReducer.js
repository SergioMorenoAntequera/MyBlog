import {SET_ALL, ON_LOADING, ON_ERROR, SET_ONE} from "types/usersActionTypes";

const INITIAL_STATE = {
    users: [],
    user: undefined,
    loading: false,
    error: "",
}

export function usersReducer(state = INITIAL_STATE, action) {
    const states = {
        [SET_ALL]: {
            ...state,
            users: action.payload,
            loading: false,
            error: "",
        },
        [SET_ONE]: {
            ...state,
            user: action.payload,
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

// export function UsersReducer() {
//     const [userState, dispatchUserState] = useReducer(usersReducer, INITIAL_STATE)
//     return {userState, dispatchUserState, usersActionTypes}
// }
