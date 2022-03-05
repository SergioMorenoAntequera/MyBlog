import {SET_ALL, ON_LOADING, ON_ERROR, SET_ONE, ADD_USER} from "actions/usersActionTypes";

const INITIAL_STATE = {
    users: {
        byId: {
            // "0": {
            //     id: "0",
            //     title: "",
            //     body: "",
            //     createdAt: "",
                // author: "",
                // comments: [""]
            // }
        },
        allIds: [],
    },
    loading: false,
    error: "",
}

export function usersReducer(state = INITIAL_STATE, action) {
    const payload = action.payload;
    switch (action.type) {
        case ADD_USER : {
            if(state.users.allIds.includes(payload.id)) return state
            
            return {
                ...state,
                    users: {
                        ...state.users,
                        byId: {
                            ...state.users.byId,
                            ...addMainRecord(action.payload)
                        },
                        allIds: addUnique(state.users.allIds, action.payload.id)
                    }
            }
        }

        default : return state
    }
}

function addMainRecord(object) {
    let result = {};
    result[object.id] = {}
    Object.keys(object).forEach(k => {
        result[object.id] = {
            ...result[object.id],
            [k]: object[k]
        }
    })
    return result
}

function addUnique(array, el) {
    if(array.includes(el)) {
        return array
    } else {
        return [...array, el]
    }
}
