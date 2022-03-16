import { ADD_REACTION, REMOVE_REACTION } from "actions/reactionsActionTypes";
import { addMainRecord, addUnique, removeKey } from "utils/reducers";


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
        case REMOVE_REACTION : {
            return {
                ...state,
                reactions: {
                    ...state.reactions,
                    byId: {
                        ...removeKey(state.reactions.byId, payload.id),
                    },
                    allIds: state.reactions.allIds.filter(it=>it!==payload.id),
                    byAttachedTo: {
                        ...removeKey(state.reactions.byAttachedTo, payload.attachedTo),
                    }
                }
            }
        }

        default : return state
    }
}


