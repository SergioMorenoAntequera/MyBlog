import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as usersActions from 'actions/usersActions'
import * as postsActions from 'actions/postsActions'
import "./style.scss"

import Spinner from 'components/Spinner'

function PostsPage(props) {
  const { id } = useParams()
  const { usersReducer, postsReducer, getOneUser } = props
  const { getPostsByUser, toggleOpenComments} = props
  
  
  const user = usersReducer.users.find(u=>u.id.toString() === id) ?? usersReducer.user
  const postsByUser = postsReducer.posts.find(p=>p.userId.toString() === id)

  useEffect(() => {
    if(user?.id !== id) getOneUser(id)
    if(!postsByUser) getPostsByUser(id)
  }, [])

  
  if(!user) return <Spinner/>
  return (<>
    <h2> Blog posts of {user.name} </h2>
    <div>
      { !postsByUser && <Spinner/> }
      { postsByUser &&  

        postsByUser.posts.map((post, index) => 
          <div className='PostsPage_Post' key={post.id} onClick={()=>toggleOpenComments(post)}>

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

const mapStateToProps = ({usersReducer, postsReducer}) => ({usersReducer, postsReducer})
const mapDispatchToProps = {...usersActions, ...postsActions}
export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)