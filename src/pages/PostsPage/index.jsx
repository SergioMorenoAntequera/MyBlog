import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as usersActions from 'actions/usersActions'
import * as postsActions from 'actions/postsActions'

import Spinner from 'components/Spinner'

function PostsPage(props) {
  const { id } = useParams()
  const { usersReducer, postsReducer, getOneUser, getPostsByUser } = props
  
  
  const user = usersReducer.user
  const userLoaded = user?.id.toString() === id
  console.log(postsReducer.posts)
  const postsByUser = postsReducer.posts.find(p=>p.userId.toString() === id)

  useEffect(() => {
    if(!userLoaded) getOneUser(id)
    if(!postsByUser) getPostsByUser(id)
  }, [])

  
  if(!userLoaded) return <Spinner/>
  return (<>
    <h2> Blog posts of {user.name} </h2>
    <div>
      {!postsByUser && <Spinner/>}
      {postsByUser &&  
        postsByUser.posts.map((post, index) => {return <div key={post.id}>
          <h3 style={{marginBottom:0}}> 
            {index} - {post.title} 
          </h3>
          <p style={{marginTop:0}}> 
            {post.body}
          </p>
        </div>})
      }
      
    </div>
  </>)
}

const mapStateToProps = ({usersReducer, postsReducer}) => ({usersReducer, postsReducer})
const mapDispatchToProps = {...usersActions, ...postsActions}
export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)