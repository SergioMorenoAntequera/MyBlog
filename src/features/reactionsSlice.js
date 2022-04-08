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
        } 
    },
})

export const { addReaction } = reactionsSlice.actions
const reactionsReducer = reactionsSlice.reducer
export default reactionsReducer