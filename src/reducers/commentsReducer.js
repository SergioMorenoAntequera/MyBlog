import { ADD_COMMENT } from "actions/commentsActionTypes";
import { addMainRecord, addUnique } from "utils/reducers";

const INITIAL_STATE = {
    comments: {
        byId: {
            // "0": {
            //     id: "0",
            //     body: "",
            //     userUid: "",
            //     attachedTo: "",
            //     createdAt: "",
            // }
        },
        allIds: [],
    }, 
}

export function commentsReducer(state = INITIAL_STATE, action) {
    const payload = action.payload;
    switch (action.type) {
        case ADD_COMMENT : {
            if(state.comments.allIds.includes(payload.id)) return state
            
            return {
                ...state,
                comments: {
                    ...state.comments,
                    byId: {
                        ...state.comments.byId,
                        ...addMainRecord(payload)
                    },
                    allIds: addUnique(state.comments.allIds, payload.id)
                }
            }
        }

        default : return state
    }
}


