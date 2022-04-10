import "./style.scss"
import Spinner from 'components/Spinner'
import Avatar from 'components/Avatar'
import useComments from 'hooks/useComments.js'
import { FaComment } from "react-icons/fa";
import { Link } from 'react-router-dom'
import useCallbackSelector from 'hooks/useCallbackSelector'
import UsersThunks from 'features/usersThunks';
import { H1 } from "components";

export default function PostCard({post: {id, body, title, userId, createdAt}}) {
  let author = useCallbackSelector(state => state.usersEntity.users.byId[userId], UsersThunks.fetchUserByUid(userId))
  let { commentsData } = useComments(id)
  
  if(!id || !author) {
    return <Spinner/>
  }
  return (<div className='PostCard'> 

    <div className='header'>
        <Avatar user={author}/>
        <div>
            <p> { author?.displayName } </p>
            <p> { new Date(createdAt.toDate()).toString() } </p>
        </div>
    </div>

    <div className="body">
        <H1> { title } </H1>    
        <p> { body } </p>    
    </div>

    <Link to={`/posts/${id}`}>
      <FaComment/> {commentsData.length}   
    </Link>
  </div>)
}