import React, { useEffect, useState } from 'react'
import H1 from 'components/H1'
import * as postsAPI from 'api/posts'
import { useUser } from 'api/auth'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, getUserFeed } from 'actions/postsActions'
import Post from 'containers/Post'


function UserPage(props) {
  const postsEntity = useSelector(state => state.postsEntity)
  const dispatch = useDispatch()
  const posts = postsEntity.posts.userFeed.map(p => postsEntity.posts.byId[p])

  const { user } = useUser()


  const [newPost, setNewPost] = useState({title:"",body:""})
 
  useEffect(() => {
    dispatch(getUserFeed(user?.uid))
  }, [user])

  function crateNewPost(event) {
    event.preventDefault()
    dispatch(createPost(user?.uid, newPost))
  }

  return (<>
    <H1> USER {user?.displayName} profile </H1>
    
    { posts?.map(post => <Post key={post.id} post={post}/> )}

    <form action="GET">
      <label htmlFor=""> title </label>
      <input type="text" value={newPost.title} onChange={e => setNewPost({...newPost, title:e.target.value})} />
      <br />
      <label htmlFor=""> body </label>
      <input type="text" value={newPost.body} onChange={e => setNewPost({...newPost, body:e.target.value})} />
      <br />
      <input type="submit" onClick={crateNewPost}/>
    </form>
    
  </>)
}

export default UserPage
