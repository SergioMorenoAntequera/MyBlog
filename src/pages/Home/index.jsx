import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import H1 from 'components/H1'
import { getMainFeed } from 'actions/postsActions'
import PostCard from 'containers/PostCard';


function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postsEntity.posts)
  const mainFeedPosts = posts.mainFeed?.map(id => posts.byId[id])

  useEffect(() => {
    dispatch(getMainFeed())
  }, [])
  
  return (<>

    <H1> Home, most recent posts </H1>
    
    { mainFeedPosts?.map(post => <PostCard key={post.id} post={post} />) }
    
  </>)
}

export default HomePage
