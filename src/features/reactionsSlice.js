const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
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

const reactionsSlice = createSlice({
    name: "reactions",
    initialState,
    reducers: {
        addReaction: (state, action) => {
            let newReaction = action.payload;
            if(state.comments.allIds.includes(newReaction.id)) return state
            state.comments.allIds.push(newReaction.id)
            state.comments.byId[newReaction.id] = newReaction
            
            if(!state.comments.byAttachedTo[newReaction.attachedTo]) 
                state.comments.byAttachedTo[newReaction.attachedTo] = []

            if(state.comments.byAttachedTo[newReaction.attachedTo].includes(newReaction.id)) return state
            state.comments.byAttachedTo[newReaction.attachedTo].push(newReaction.id)
        },
        removeReaction: (state, {payload}) => {
            delete state.reactions.byId[payload.id]
            
            let indexToRemove = state.reactions.allIds.indexOf(payload.id)
            state.reactions.allIds.splice(indexToRemove, 1);

            indexToRemove = state.reactions.byAttachedTo[payload.attachedTo].indexOf(payload.id)
            state.reactions.byAttachedTo[payload.attachedTo].splice(indexToRemove, 1);
        }
    },
})

export const { addReaction, removeReaction } = reactionsSlice.actions
const reactionsReducer = reactionsSlice.reducer
export default reactionsReducer