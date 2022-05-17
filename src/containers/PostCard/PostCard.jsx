import Spinner from 'components/Spinner'
import useComments from 'hooks/useComments.js'
import { FaComment } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import useCallbackSelector from 'hooks/useCallbackSelector'
import UsersThunks from 'features/usersThunks';
import ReactionsTypes from "types/reactionsType";
import * as S from './PostCard.styled';
import { Reaction } from 'components';
import H2 from 'components/H2';
import { Button } from 'components';
import useUser from 'api/auth';
import { useDispatch } from 'react-redux';
import { deletePost } from 'actions/postsActions';
import LinesThunks from 'features/linesThunks';
import Lines from 'containers/Lines';
import { useState } from 'react';

export default function PostCard ({className, post: {id, body, title, userId, createdAt}}) {
  const { user } = useUser();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let author = useCallbackSelector(state => state.usersEntity.users.byId[userId], UsersThunks.fetchUserByUid(userId))
  let lines = useCallbackSelector(
    state => state.linesEntity.lines.byPost[id], 
    LinesThunks.fetchLinesByPost(id),
    state => state.linesEntity.lines.byId
  )
  let { commentsData } = useComments(id);
  const isAuthorLoggedIn = user?.uid === author?.uid

  const [loadedLines, setLoadedLines] = useState(1)

  async function handleDelete() {
    await dispatch(deletePost(id))
  }
  function handleEdit() {
    navigate(`/posts/${id}/edit`)
  }

  function onLoadMore(event) {
    event.preventDefault(); 
    setLoadedLines(loadedLines=>loadedLines+3)
  }

  if(!id || !author) return <Spinner/>
  return (<S.PostCard className={className}> 

    <S.Header>
      <div className='Author'> 
        <S.SAvatar user={author}/>
        <div>
          <Link to={`/user/${author.uid}`}  className="unstyled-link"> 
            <p> { author?.displayName } </p> 
          </Link>
          <S.SCaption> { createdAt.toDate().toDateString() }  </S.SCaption>
        </div>
      </div>

      {isAuthorLoggedIn &&
        <div>
          <Button onClick={handleEdit}> Edit </Button>
          <Button onClick={handleDelete}> Remove </Button>
        </div>
      }
    </S.Header>

    <S.Body>
      <Link to={`/posts/${id}`} className="unstyled-link">

        <S.ContentContainer>
          <H2> { title } </H2>    
          <Lines lines={lines} amountToShow={loadedLines}/>
          { loadedLines < lines?.length && 
            <span onClick={onLoadMore}> Load More </span>
          }
            
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