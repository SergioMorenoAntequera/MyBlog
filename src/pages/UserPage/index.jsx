import React, { useEffect } from 'react'
import H1 from 'components/H1'
import { useDispatch, useSelector } from 'react-redux'
import { clearUserFeed, getUserFeed } from 'actions/postsActions'
import Post from 'containers/PostCard'
import { useParams } from 'react-router-dom'
import Reaction from 'components/Reaction'
import ReactionsTypes from 'types/reactions'


function UserPage(props) {
  const postsEntity = useSelector(state => state.postsEntity)
  const usersEntity = useSelector(state => state.usersEntity)
  const dispatch = useDispatch()
  
  const { id } = useParams()
  const posts = postsEntity.posts.userFeed.map(p => postsEntity.posts.byId[p])
  const user = usersEntity.users.byId[id]

  
 
  useEffect(() => {
    dispatch(clearUserFeed())
    dispatch(getUserFeed(user?.uid))
  }, [user])

  
  return (<>
    <H1 style={{display:"flex"}}> 
      USER {user?.displayName} profile 
      <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.like}/>
    </H1>
    
    { posts?.map(post => <Post key={post.id} post={post}/> )}

  </>)
}

export default UserPage
