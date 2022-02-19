import { useReducer } from "react"

const INITIAL_STATE = {
    users: []
}

const usersActionTypes = Object.freeze({
    setUsers: 0,
})

export function usersReducer(state = INITIAL_STATE, action) {
    const states = {
        [usersActionTypes.setUsers]: {
            ...state,
            users: action.payload
        }
    };
    return states[action.type] ?? state;
}

export function UsersReducer() {
    const [userState, dispatchUserState] = useReducer(usersReducer, INITIAL_STATE)
    return {userState, dispatchUserState, usersActionTypes}
}
