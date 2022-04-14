import "./PostCard.scss"
import Spinner from 'components/Spinner'
import Avatar from 'components/Avatar'
import useComments from 'hooks/useComments.js'
import { FaComment, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import useCallbackSelector from 'hooks/useCallbackSelector'
import UsersThunks from 'features/usersThunks';
import { H1 } from "components";
import Caption from "components/Caption";
import useReactions from "hooks/useReactions";
import ReactionsTypes from "types/reactions";

export default function PostCard({post: {id, body, title, userId, createdAt}}) {
  let author = useCallbackSelector(state => state.usersEntity.users.byId[userId], UsersThunks.fetchUserByUid(userId))
  let { commentsData } = useComments(id)
  let {reactionsData } = useReactions(id)
  
  if(!id || !author) {
    return <Spinner/>
  }
  if(reactionsData.length>0) {
    console.log(reactionsData)
  }
  
  return (<div className='PostCard'> 

    <div className="header">
      <Avatar user={author}/>
      <div>
        <Link to={`/user/${author.uid}`}>
          <p> { author?.displayName } </p>
        </Link>
        <Caption> { new Date(createdAt.toDate()).toDateString() }  </Caption>
      </div>
    </div>
    

    <div className="body">
      <Link to={`/posts/${id}`} className="unstyled-link">
        <H1> { title } </H1>    

        <p> { body } </p>

        <div className="reactions">
          <FaComment/> {commentsData.length}
          <FaHeart/> {reactionsData.filter(it=>it.type===ReactionsTypes.TYPES.like.type).length}
        </div>
      </Link>
    </div>
  </div>)
}