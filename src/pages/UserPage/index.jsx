import React, { useEffect, useState } from 'react'
import H1 from 'components/H1'
import { useUser } from 'api/auth'
import { useDispatch, useSelector } from 'react-redux'
import { clearUserFeed, createPost, getUserFeed } from 'actions/postsActions'
import Post from 'containers/PostCard'
import { useParams } from 'react-router-dom'
import Reaction from 'components/Reaction'
import ReactionsTypes from 'types/reactions'


function UserPage(props) {
  const postsEntity = useSelector(state => state.postsEntity)
  const usersEntity = useSelector(state => state.usersEntity)
  const dispatch = useDispatch()
  
  const { user:login } = useUser()
  const { id } = useParams()
  const posts = postsEntity.posts.userFeed.map(p => postsEntity.posts.byId[p])
  const user = usersEntity.users.byId[id]

  const [newPost, setNewPost] = useState({title:"",body:""})
 
  useEffect(() => {
    dispatch(clearUserFeed())
    dispatch(getUserFeed(user?.uid))
  }, [user])

  function crateNewPost(event) {
    event.preventDefault()
    dispatch(createPost(user?.uid, newPost))
    setNewPost({title:"",body:""})
  }

  return (<>
    <H1 style={{display:"flex"}}> 
      USER {user?.displayName} profile 
      <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.like}/>
    </H1>
    
    { posts?.map(post => <Post key={post.id} post={post}/> )}

    { login?.uid === id &&
      <form action="GET">
        <label htmlFor=""> title </label>
        <input type="text" value={newPost.title} onChange={e => setNewPost({...newPost, title:e.target.value})} />
        <br />
        <label htmlFor=""> body </label>
        <input type="text" value={newPost.body} onChange={e => setNewPost({...newPost, body:e.target.value})} />
        <br />
        <input type="submit" onClick={crateNewPost}/>
      </form>
    }
    
    
  </>)
}

export default UserPage
