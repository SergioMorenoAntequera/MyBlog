import AddComment from "containers/AddComment"
import Comment from "containers/Comment"
import { useDispatch, useSelector } from "react-redux"


export default function useComments(attachedToId) {

    const dispatch = useDispatch()

    let commentsData = useSelector(state => {
        let auxComments = state.commentsEntity.comments
        if(auxComments.byAttachedTo[attachedToId]) {
          return auxComments.byAttachedTo[attachedToId].map(commentId => auxComments.byId[commentId])
        }

        // dispatch()
        return []
    })

    let comments = <CommentsCont comments={commentsData}/>

    return  {
        commentsData,
        comments,
        AddComment
    }
}

function CommentsCont({comments}) {
    return (<div>
        {comments?.map(comment => 
            <Comment key={comment.id} comment={comment}/>
        )}
    </div>)
}
