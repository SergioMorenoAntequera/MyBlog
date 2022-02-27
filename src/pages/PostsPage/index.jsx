import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "./style.scss"

import Spinner from 'components/Spinner'

import { getOneUser } from 'actions/usersActions'
import { getPostsByUser, toggleOpenComments } from 'actions/postsActions'

function PostsPage() {
  const dispatch = useDispatch()
  const {usersReducer, postsReducer} = useSelector(state => state)
  const { id } = useParams()
  
  const user = usersReducer.users.find(u=>u.id.toString() === id) ?? usersReducer.user
  const postsByUser = postsReducer.posts.find(p=>p.userId.toString() === id)

  useEffect(() => {
    if(user?.id !== id) dispatch(getOneUser(id))
    if(!postsByUser) dispatch(getPostsByUser(id))
  }, [])

  
  if(!user) return <Spinner/>
  return (<>
    <h2> Blog posts of {user.name} </h2>
    <div>
      { !postsByUser && <Spinner/> }
      { postsByUser &&  

        postsByUser.posts.map((post, index) => 
          <div className='PostsPage_Post' key={post.id} onClick={()=>dispatch(toggleOpenComments(post))}>

            <h3 className='PostsPage_Post_Title'> 
              {index} - {post.title}
            </h3>

            <p className='PostsPage_Post_Body'> 
              {post.body}
            </p>

            <div className={`Comments ${post.open ? 'open':''}`}>
              {!post.comments.length && <Spinner/>}
              {post.comments.map(comment => <div className='Comment' key={comment.id}>
                <div className='Header'>
                  <h4> {comment.name} </h4>
                  <p> {comment.email} </p>
                </div>
                <div className='Body'>
                  <p> {comment.body} </p>
                </div>
                
              </div>)}
            </div>

          </div>
        )
      }
    </div>
  </>)
}


export default PostsPage