import AddComment from "containers/AddComment"
import Comment from "containers/Comment"
import CommentsThunks from "features/commentsThunks"
import { useSelector } from "react-redux"
import useCallbackSelector from "./useCallbackSelector"


export default function useComments(attachedToId) {

    let commentsId = useCallbackSelector(
        state => state.commentsEntity.comments.byAttachedTo[attachedToId],
        CommentsThunks.fetchCommentsByPost(attachedToId)
    )
    commentsId = commentsId ?? []
    let commentsData = useSelector(state => {
        return commentsId.map(commentId => 
            state.commentsEntity.comments.byId[commentId]
        );
    })
    
    let comments = <CommentsCont comments={commentsData}/>
    let AddCommentComponent = <AddComment to={attachedToId}/>

    return  {
        commentsData,
        comments,
        AddComment : AddCommentComponent
    }
}

function CommentsCont({comments}) {
    if(!comments.length) return <></>
    return (<div>
        {comments?.map(comment => 
            <Comment key={comment.id} comment={comment}/>
        )}
    </div>)
}
