import { ADD_COMMENT } from "actions/commentsActionTypes";
import * as CommentsAPI from 'api/comments'
import { addComment } from "features/commentsSlice";

export const createComment = (newComment) => async (dispatch) => {
    if(!newComment) return
    var newCommentCreated = await CommentsAPI.createNew(newComment)
    
    dispatch({
        type: ADD_COMMENT,
        payload: newCommentCreated
    })
}

export const getCommentByPost = (postId) => async (dispatch) => {
    if(!postId) return
    var fetchedComments = await CommentsAPI.getByPost(postId)

    fetchedComments.forEach(comment => {
        dispatch(addComment(comment))
    })
}
