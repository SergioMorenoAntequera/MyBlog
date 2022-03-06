import { getUserByUid } from 'actions/usersActions'
import Spinner from 'components/Spinner'
import UserImage from 'components/UserImage'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.scss"

export default function Post({post: {id, body, title, userId, createdAt}}) {
  let author = useSelector(state=> state.usersEntity.users.byId[userId])
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(!author) {
      dispatch(getUserByUid(userId))
    }
  }, [userId])
  
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
  </div>)
}