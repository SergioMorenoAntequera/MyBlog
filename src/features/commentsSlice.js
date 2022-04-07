import CommentsApi from "api/comments"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")


const initialState = {
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
        byAttachedTo: {},
    }, 
}

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComment: (state, action) => {
            let newComment = action.payload;
            if(state.comments.allIds.includes(newComment.id)) return state
            state.comments.allIds.push(newComment.id)
            state.comments.byId[newComment.id] = newComment
            
            if(!state.comments.byAttachedTo[newComment.attachedTo]) 
                state.comments.byAttachedTo[newComment.attachedTo] = []

            if(state.comments.byAttachedTo[newComment.attachedTo].includes(newComment.id)) return state
            state.comments.byAttachedTo[newComment.attachedTo].push(newComment.id)
        } 
    },
})

export const { addComment } = commentsSlice.actions
const commentsReducer = commentsSlice.reducer
export default commentsReducer