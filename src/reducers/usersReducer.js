import { ADD_USER } from "actions/usersActionTypes";
import { addMainRecord, addUnique } from "utils/reducers";

const INITIAL_STATE = {
    users: {
        byId: {
            // "0": {
            //     id: "0",
            //     title: "",
            //     body: "",
            //     createdAt: "",
            //     comments: [""]
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
                        [action.payload.uid]: addMainRecord(action.payload)[action.payload.id]
                    },
                    allIds: addUnique(state.users.allIds, action.payload.uid)
                }
            }
        }

        default : return state
    }
}


