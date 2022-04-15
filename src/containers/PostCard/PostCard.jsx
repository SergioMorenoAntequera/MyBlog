import Spinner from 'components/Spinner'
import useComments from 'hooks/useComments.js'
import { FaComment, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import useCallbackSelector from 'hooks/useCallbackSelector'
import UsersThunks from 'features/usersThunks';
import Caption from "components/Caption";
import useReactions from "hooks/useReactions";
import ReactionsTypes from "types/reactions";
import * as S from './PostCard.styled';
import { Avatar, H1 } from 'components';

export default function PostCard ({className, post: {id, body, title, userId, createdAt}}) {
  let author = useCallbackSelector(state => state.usersEntity.users.byId[userId], UsersThunks.fetchUserByUid(userId))
  let { commentsData } = useComments(id)
  let {reactionsData } = useReactions(id)
  
  if(!id || !author) {
    return <Spinner/>
  }
  if(reactionsData.length>0) {
    console.log(reactionsData)
  }
  
  return (<S.PostCard> 

    <S.Header>
      <Avatar className={className} user={author}/>
      <div>
        <Link to={`/user/${author.uid}`}>
          <p> { author?.displayName } </p>
        </Link>
        <Caption> { new Date(createdAt.toDate()).toDateString() }  </Caption>
      </div>
    </S.Header>

    <S.Body>
      <Link to={`/posts/${id}`} className="unstyled-link">
        <H1> { title } </H1>    

        <p> { body } </p>

        <div className="reactions">
          <FaComment/> {commentsData.length}
          <FaHeart/> {reactionsData.filter(it=>it.type===ReactionsTypes.TYPES.like.type).length}
        </div>
      </Link>
    </S.Body>
    
  </S.PostCard>)
}