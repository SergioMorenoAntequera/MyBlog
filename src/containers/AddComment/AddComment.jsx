import { useUser } from 'api/auth'
import CommentsThunks from 'features/commentsThunks'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function AddComment({to}) {

    const dispatch = useDispatch()
    const {user:login} = useUser()

    const [newCommentBody, setNewCommentBody] = useState("")
    function addComment() {
      if(!login) return
      dispatch(CommentsThunks.createComment({
        body: newCommentBody,
        userUid: login.uid,
        attachedTo: to
      }))
    }

    return (<div>
        <input type="text" value={newCommentBody} onChange={(e)=>{setNewCommentBody(e.target.value)}}/>
        <button onClick={addComment}> Comment </button>
    </div>)
}
