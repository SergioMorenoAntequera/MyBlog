import React, { useEffect, useState } from 'react'
import H1 from 'components/H1'
import { createNewPost, getPostsByUser } from 'api/posts'
import { useUser } from 'api/auth'


function UserPage(props) {
  const { user } = useUser()
  const [posts, setPosts] = useState([])
  const [newPostBody, setNewPostBody] = useState("")
  

  useEffect(() => {
    if(!user) return
    getPostsByUser(user.uid).then(res => {
      setPosts(res)
      console.log(res)
    })
  }, [user])
  
  function crateNewPost(event) {
    event.preventDefault()
    createNewPost(user.uid, newPostBody)
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
