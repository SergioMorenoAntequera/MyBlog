import Spinner from 'components/Spinner'
import useComments from 'hooks/useComments.js'
import { FaComment } from "react-icons/fa";
import { Link } from 'react-router-dom'
import useCallbackSelector from 'hooks/useCallbackSelector'
import UsersThunks from 'features/usersThunks';
import useReactions from "hooks/useReactions";
import ReactionsTypes from "types/reactions";
import * as S from './PostCard.styled';
import { Reaction } from 'components';
import H2 from 'components/H2';
import { Button } from 'components';
import useUser from 'api/auth';
import { useDispatch } from 'react-redux';
import { deletePost } from 'actions/postsActions';

export default function PostCard ({className, post: {id, body, title, userId, createdAt}}) {
  let author = useCallbackSelector(state => state.usersEntity.users.byId[userId], UsersThunks.fetchUserByUid(userId))
  let { commentsData } = useComments(id)
  
  const { user } = useUser()
  const dispatch = useDispatch()
  const isAuthorLoggedIn = user?.uid == author?.uid

  if(!id || !author) {
    return <Spinner/>
  }

  async function handleDelete() {
    await dispatch(deletePost(id))
  }
  function handleEdit() {

    //deletePost(id)
  }

  return (<S.PostCard className={className}> 

    <S.Header>
      <div className='Author'> 
        <S.SAvatar user={author}/>
        <div>
          <Link to={`/user/${author.uid}`}  className="unstyled-link"> 
            <p> { author?.displayName } </p> 
          </Link>
          <S.SCaption> { new Date(createdAt.toDate()).toDateString() }  </S.SCaption>
        </div>
      </div>

      {isAuthorLoggedIn &&
        <div>
          <Button> Edit </Button>
          <Button onClick={handleDelete}> Remove </Button>
        </div>
      }
    </S.Header>

    <S.Body>
      <Link to={`/posts/${id}`} className="unstyled-link">

        <S.ContentContainer>
          <H2> { title } </H2>    
          <p> { body } </p>
        </S.ContentContainer>
        

        <S.ReactionsContainer>
          <div> <FaComment/> {commentsData.length} </div>
          <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.like} onClick={event=>event.preventDefault()}/>
          <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.disLike} onClick={event=>event.preventDefault()}/>
        </S.ReactionsContainer>
      </Link>
    </S.Body>
    
  </S.PostCard>)
}