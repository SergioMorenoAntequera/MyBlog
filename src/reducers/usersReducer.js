// import { useReducer } from "react"

const INITIAL_STATE = {
    users: [],
    loading: true,
    error: false,
}

export const usersActionTypes = Object.freeze({
    getState: 0,
    setUsers: 1,
})

export function usersReducer(state = INITIAL_STATE, action) {
    const states = {
        [usersActionTypes.getState]: {
            ...state,
        },
        [usersActionTypes.setUsers]: {
            ...state,
            users: action.payload,
            loading: false,
            error: false,
        }
    };
    return states[action.type] ?? state;
}

// export function UsersReducer() {
//     const [userState, dispatchUserState] = useReducer(usersReducer, INITIAL_STATE)
//     return {userState, dispatchUserState, usersActionTypes}
// }
