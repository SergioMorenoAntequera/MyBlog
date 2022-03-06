import UserImage from 'components/UserImage'
import React from 'react'
import { useSelector } from 'react-redux'
import "./style.scss"

export default function Post({post: {body, title, userId, createdAt}}) {

  const author = useSelector(state=> state.usersEntity.users.byId[userId])
  
  return (<div className='Post'> 
    <div className='header'>
        <UserImage user={author}/>
        <div>
            <p> {userId} </p>
            <p> { new Date(createdAt.toDate()).toString() } </p>
        </div>
    </div>

    <div className="body">
        <p> { title } </p>    
        <p> { body } </p>    
    </div>
  </div>)
}