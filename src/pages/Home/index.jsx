import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMainFeed } from 'actions/postsActions'
import PostCard from 'containers/PostCard';
import { Separator, H1 } from 'components';
import AddPost from 'containers/AddPost';


function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postsEntity.posts)
  const mainFeedPosts = posts.mainFeed?.map(id => posts.byId[id])

  useEffect(() => {
    dispatch(getMainFeed())
  }, [dispatch])
  
  return (<>

    <H1> Home, most recent posts </H1>

    <AddPost />
    
    { mainFeedPosts?.map((post, index) => <>
        <PostCard key={post.id} post={post} />
        {index < mainFeedPosts.length ? 
          <Separator /> 
          : ""
        }
    </>) }
    
  </>)
}

export default HomePage
