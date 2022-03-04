import React, { useEffect, useState } from 'react'
import H1 from 'components/H1'
import * as postsAPI from 'api/posts'
import { useUser } from 'api/auth'
import { useDispatch, useSelector } from 'react-redux'
import { getUserFeed } from 'actions/postsActions'


function UserPage(props) {
  const postsEntity = useSelector(state => state.posts)
  const posts = postsEntity.posts.userFeed.map(p => postsEntity.posts.byId[p])
  
  const dispatch = useDispatch()
  const { user } = useUser()


  const [newPostBody, setNewPostBody] = useState("")

  
 
  useEffect(() => {
    if(!user) return
    console.log(user)
    
    dispatch(getUserFeed(user.uid))
  }, [user])

  function crateNewPost(event) {
    event.preventDefault()
    postsAPI.createNew(user.uid, newPostBody)
  }

  return (<>
    <H1> USER {user?.displayName} profile </H1>
    
    { posts?.map(post => <p key={post.id}> {post.body} </p>) }

    <form action="GET">
      <input type="text" value={newPostBody} onChange={e => setNewPostBody(e.target.value)} />
      <input type="submit" onClick={crateNewPost}/>
    </form>
    
  </>)
}

export default UserPage
