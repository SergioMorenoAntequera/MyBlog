import { getCommentByPost } from "actions/commentsActions"
import AddComment from "containers/AddComment"
import Comment from "containers/Comment"
import { useSelector } from "react-redux"
import useCallbackSelector from "./useCallbackSelector"


export default function useComments(attachedToId) {

    let commentsId = useCallbackSelector(
        state => state.commentsEntity.comments.byAttachedTo[attachedToId],
        getCommentByPost(attachedToId)
    )
    commentsId = commentsId ?? []
    let commentsData = useSelector(state => {
        return commentsId.map(commentId => 
            state.commentsEntity.comments.byId[commentId]
        );
    })
    
    let comments = <CommentsCont comments={commentsData}/>
    
    return  {
        commentsData,
        comments,
        AddComment
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
