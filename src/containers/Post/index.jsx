import { createComment, getCommentByPost } from 'actions/commentsActions'
import { getUserByUid } from 'actions/usersActions'
import { useUser } from 'api/auth'
import Spinner from 'components/Spinner'
import UserImage from 'components/UserImage'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.scss"

export default function Post({post: {id, body, title, userId, createdAt}}) {
  let author = useSelector(state => state.usersEntity.users.byId[userId])
  const dispatch = useDispatch()
  const {user:login} = useUser()

  // dispatch(getCommentByPost(id))

  useEffect(() => {
    if(!author) {
      dispatch(getUserByUid(userId))
    }
  }, [userId])

  const [newCommentBody, setNewCommentBody] = useState("")
  function addComment() {
    if(!login) return
    dispatch(createComment({
      body: newCommentBody,
      userUid: login.uid,
      attachedTo: id
    }))
  }
  
  if(!id || !author) {
    return <Spinner/>
  }
  return (<div className='Post'> 

    <div className='header'>
        <UserImage user={author}/>
        <div>
            <p> { author?.displayName } </p>
            <p> { new Date(createdAt.toDate()).toString() } </p>
        </div>
    </div>

    <div className="body">
        <p> { title } </p>    
        <p> { body } </p>    
    </div>

    <div className='Comments'>
      <p> 
        COMMENTS  
        <input type="text" value={newCommentBody} onChange={(e)=>{setNewCommentBody(e.target.value)}}/>
        <button onClick={addComment}> Comment </button>
      </p> 

      

    </div>
    
  </div>)
}