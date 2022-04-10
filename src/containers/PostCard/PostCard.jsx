import "./style.scss"
import Spinner from 'components/Spinner'
import UserImage from 'components/UserImage'
import useComments from 'hooks/useComments.js'
import { FaComment } from "react-icons/fa";
import { Link } from 'react-router-dom'
import useCallbackSelector from 'hooks/useCallbackSelector'
import UsersThunks from 'features/usersThunks';

export default function Post({post: {id, body, title, userId, createdAt}}) {
  let author = useCallbackSelector(state => state.usersEntity.users.byId[userId], UsersThunks.fetchUserByUid(userId))
  let { commentsData } = useComments(id)
  
  if(!id || !author) {
    return <Spinner/>
  }
  return (<div className='Post'> 

    <div className='header'>
        <UserImage user={author}/>
        <div>
            <p> { author?.displayName } </p>
            <p> { new Date(createdAt.toDate()).toString() } </p>
        </div>
    </div>

    <div className="body">
        <p> { title } </p>    
        <p> { body } </p>    
    </div>

    <Link to={`/posts/${id}`}>
      <FaComment/> {commentsData.length}   
    </Link>
  </div>)
}