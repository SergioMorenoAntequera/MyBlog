import { ADD_REACTION } from "actions/reactionsActionTypes";
import { addMainRecord, addUnique } from "utils/reducers";


const INITIAL_STATE = {
    reactions: {
        byId: {
            // "0": {
            //     id: "0",
            //     userUid: "",
            //     type: "",
            //     attachedTo: "",
            //     attachedToType: "",
            //     createdAt: "",
            // }
        },
        allIds: [],
        byAttachedTo: {},
    }, 
}

export function reactionsReducer(state = INITIAL_STATE, action) {
    const payload = action.payload;

    switch (action.type) {
        case ADD_REACTION : {
            if(state.reactions.allIds.includes(payload.id)) return state
            
            return {
                ...state,
                reactions: {
                    ...state.reactions,
                    byId: {
                        ...state.reactions.byId,
                        ...addMainRecord(payload)
                    },
                    allIds: addUnique(state.reactions.allIds, payload.id),
                    byAttachedTo: {
                        ...state.reactions.byAttachedTo,
                        [payload.attachedTo]: addUnique(
                            state.reactions.byAttachedTo[payload.attachedTo], 
                            payload.id
                        ),
                    }
                }
            }
        }

        default : return state
    }
}


