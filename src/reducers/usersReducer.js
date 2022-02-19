const INITIAL_STATE = {
    users: []
}

const actionTypes = Object.freeze({
    getUsers: 0,
})

export function usersReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case(actionTypes.getUsers): return {
            ...state,
            users: action.payload
        }
        default: return state
    }
}