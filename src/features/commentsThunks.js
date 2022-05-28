import CommentsApi from "api/commentsAPI"
import { addComment } from "./commentsSlice"
import { removeReaction } from "./reactionsSlice"
const { createAsyncThunk } = require("@reduxjs/toolkit")

const createComment = createAsyncThunk(
    'comments/createComment',
    async (newComment, {dispatch}) => {
        if(!newComment) return
        CommentsApi.createNew(newComment)
        dispatch(addComment(newComment))
    }
)

const removeComment = createAsyncThunk(
    'comments/removeComment',
    async ({id, attachedTo}, {dispatch}) => {
        if(!id) return
        CommentsApi.deleteComment(id)
        dispatch(removeReaction({id:id, attachedTo:attachedTo}))
    }
)

const fetchCommentsByPost = createAsyncThunk(
    'comments/fetchCommentsByPost',
    async (postId, {dispatch}) => {
        
        if(!postId) return
        var fetchedComments = await CommentsApi.getByPost(postId)
        fetchedComments.forEach(comment => 
            dispatch(addComment(comment))
        )
    }
)

const CommentsThunks = {
    fetchCommentsByPost,
    createComment,
    removeComment
}
export default CommentsThunks