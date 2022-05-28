import { useUser } from 'api/auth'
import { Button } from 'components'
import { Avatar } from 'components'
import CommentsThunks from 'features/commentsThunks'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Comment from 'types/commentTypes'
import * as S from './AddComment.styled'

export default function AddComment({to}) {

    const dispatch = useDispatch()
    const {user:login} = useUser()

    const [newCommentBody, setNewCommentBody] = useState("")
    function addComment() {
      if(!login) return
      dispatch(CommentsThunks.createComment(new Comment({
        body: newCommentBody,
        userUid: login.uid,
        attachedTo: to
      })))
      setNewCommentBody("")
    }

    return (<S.AddComment>
        <Avatar user={login}/>
        <input type="text" value={newCommentBody} onChange={(e)=>{setNewCommentBody(e.target.value)}}/>
        <Button variant="contained" onClick={addComment}> Comment </Button>
    </S.AddComment>)
}
