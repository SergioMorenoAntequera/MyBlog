import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from 'actions/usersActions'
import { Link } from 'react-router-dom'
import Spinner from 'components/Spinner'
import Fatal from 'components//Fatal'
import H1 from 'components/H1'
import * as PostsAPI from 'api/posts'
import { getMainFeed } from 'actions/postsActions'
import Post from 'containers/PostCard'


function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postsEntity.posts)
  const mainFeedPosts = posts.mainFeed?.map(id => posts.byId[id])

  useEffect(() => {
    dispatch(getMainFeed())
  }, [])
  
  return (<>

    <H1> Home, most recent posts </H1>
    
    { mainFeedPosts?.map(post => <Post key={post.id} post={post} />) }
    
  </>)
}

export default HomePage
