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
  
  
  const user = usersReducer.users.find(u=>id.toString() === id) ?? usersReducer.user
  const postsByUser = postsReducer.posts.find(p=>p.userId.toString() === id)

  useEffect(() => {
    if(!user) getOneUser(id)
    if(!postsByUser) getPostsByUser(id)
  }, [])

  
  if(!user) return <Spinner/>
  return (<>
    <h2> Blog posts of {user.name} </h2>
    <div>
      {!postsByUser && <Spinner/>}
      {postsByUser &&  
        postsByUser.posts.map((post, index) => {return <div key={post.id}>
          <div className='PostsPage_Post' onClick={()=>toggleOpenComments(post)}>
            <h3 style={{marginBottom:0}}> 
              {index} - {post.title}
            </h3>

            <p style={{marginTop:0}} > 
              {post.body}
            </p>

            <div className='Comments' style={{display: post.open? "block" : "none"}}>
              {!post.comments.length && <Spinner/>}
              {post.comments.map(comment => <div className='Comment' key={comment.id}>
                AAAAAAAAA
              </div>)}
            </div>

          </div>
        </div>})
      }
    </div>
  </>)
}

const mapStateToProps = ({usersReducer, postsReducer}) => ({usersReducer, postsReducer})
const mapDispatchToProps = {...usersActions, ...postsActions}
export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)