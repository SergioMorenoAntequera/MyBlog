import React from 'react'
import H2 from 'components/H2'
import Spinner from 'components/Spinner'
import useComments from 'hooks/useComments'
import useCallbackSelector from 'hooks/useCallbackSelector'
import { useParams } from 'react-router-dom'
import Avatar from 'components/Avatar'
import postActions from 'actions/postsActions'
import "./style.scss"
import Reaction from 'components/Reaction'
import ReactionsTypes from 'types/reactionsType'
import UsersThunks from 'features/usersThunks'
import LinesThunks from 'features/linesThunks'

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
        <div className='PostPage_Post'>
            <Avatar user={author}/>
            <div>
                <H2>INFO DEL POST {post.title} </H2>
                {
                    lines?.map(line => <p key={line.id}> {line.content} </p>)
                }
            </div>
        </div>

        <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.like}/>
        <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.disLike}/>
        <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.save}/>
        
        { AddComment }
        { comments }
    </div>)
}
