import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from 'actions/usersActions'
import { Link } from 'react-router-dom'
import Spinner from 'components/Spinner'
import Fatal from 'components//Fatal'
import H1 from 'components/H1'
import { getRecentPosts } from 'api/firestore'


function HomePage(props) {
  
  const [recentPosts, setRecentPosts] = useState([])

  useEffect(() => {
    getRecentPosts().then(res => {
      setRecentPosts(res) 
    })

  }, [])
  
  console.log(recentPosts)
  return (<>

    <H1> Home, most recent posts </H1>
    
    { recentPosts?.map(post => <p key={post.id}> {post.body} </p>) }
    
  </>)
}

export default HomePage
