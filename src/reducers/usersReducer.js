import {GET_STATE, SET_USERS, ON_LOADING, ON_ERROR} from "types/usersActionTypes";

const INITIAL_STATE = {
    users: [],
    loading: false,
    error: "",
}

export function usersReducer(state = INITIAL_STATE, action) {
    const states = {
        [GET_STATE]: {
            ...state,
        },
        [SET_USERS]: {
            ...state,
            users: action.payload,
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
