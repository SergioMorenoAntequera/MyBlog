import React from 'react'
import "./style.scss"

export default function Post({post: {body, title, author, createdAt}}) {
  
  return (<div className='Post'> 
    <div className='header'>
        <div> author img </div>
        <div>
            <p> {author} </p>
            <p> { new Date(createdAt.toDate()).toString() } </p>
        </div>
    </div>

    <div className="body">
        <p> { title } </p>    
        <p> { body } </p>    
    </div>
  </div>)
}