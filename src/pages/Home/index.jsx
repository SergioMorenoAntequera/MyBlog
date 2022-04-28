import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMainFeed } from 'actions/postsActions'
import PostCard from 'containers/PostCard';
import { Separator, H1 } from 'components';


function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postsEntity.posts)
  const mainFeedPosts = posts.mainFeed?.map(id => posts.byId[id])

  useEffect(() => {
    dispatch(getMainFeed())
  }, [dispatch])
  
  return (<>

    <H1> Home, most recent posts </H1>
    
    { mainFeedPosts?.map((post, index) => <div key={post.id}>
        <PostCard post={post} />
        {index < mainFeedPosts.length ? 
          <Separator /> 
          : ""
        }
    </div>) }
    
  </>)
}

export default HomePage
