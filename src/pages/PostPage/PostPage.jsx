import React from 'react'
import H1 from 'components/H1'
import Spinner from 'components/Spinner'
import useComments from 'hooks/useComments'
import useCallbackSelector from 'hooks/useCallbackSelector'
import { useParams } from 'react-router-dom'
import postActions from 'actions/postsActions'
import "./style.scss"
import Reaction from 'components/Reaction'
import ReactionsTypes from 'types/reactionsType'
import UsersThunks from 'features/usersThunks'
import LinesThunks from 'features/linesThunks'
import Lines from 'containers/Lines'
import Caption from 'components/Caption'
import { Avatar } from 'components'

export default function PostPage() {

    
    const { id } = useParams()
    const { comments, AddComment } = useComments(id)
    
    const post = useCallbackSelector(
        state => state.postsEntity.posts.byId[id],
        postActions.getById(id)
    )
    const author = useCallbackSelector(
        state => state.usersEntity.users.byId[post?.userId],
        UsersThunks.fetchUserByUid(post?.userId)
    )

    const lines = useCallbackSelector(
        state => state.linesEntity.lines.byPost[id],
        LinesThunks.fetchLinesByPost(id),
        state => state.linesEntity.lines.byId
    )
    
    if(!post) return <Spinner/>
    
    return (<div className='PostPage'>
        <div className='PostPage_Header'>
            <div>
                <Caption> {post.createdAt.toDate().toDateString()} </Caption>
                <H1 fontWeight="bold" mb="0"> {post.title || "NoTitleFound"} </H1>
            </div>
            <Avatar width="40px" height="40px" user={author}/>
        </div>
        <div className='PostPage_Body'>
            <Lines lines={lines} />
        </div>

        <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.like}/>
        <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.disLike}/>
        <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.save}/>
        
        { AddComment }
        { comments }
    </div>)
}
