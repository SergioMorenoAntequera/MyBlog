import CommentsApi from "api/comments"
import { addComment } from "./commentsSlice"
const { createAsyncThunk } = require("@reduxjs/toolkit")


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

const createComment = createAsyncThunk(
    'comments/createComment',
    async (newComment, {dispatch}) => {
        if(!newComment) return
        var newCommentCreated = await CommentsApi.createNew(newComment)
        dispatch(addComment(newCommentCreated))
    }
)

const CommentsThunks = {
    fetchCommentsByPost,
    createComment
}
export default CommentsThunks