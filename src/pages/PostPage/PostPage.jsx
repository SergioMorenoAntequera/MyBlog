import React from 'react'
import H1 from 'components/H1'
import Spinner from 'components/Spinner'
import useComments from 'hooks/useComments'
import useCallbackSelector from 'hooks/useCallbackSelector'
import { useParams } from 'react-router-dom'
import UserImage from 'components/UserImage'
import postActions from 'actions/postsActions'
import usersActions from 'actions/usersActions'
import "./style.scss"
import Reaction from 'components/Reaction'
import ReactionsTypes from 'types/reactions'

export default function PostPage() {

    
    const { id } = useParams()
    const { comments, AddComment } = useComments(id)
    
    const post = useCallbackSelector(
        state => state.postsEntity.posts.byId[id],
        postActions.getById(id)
    )
    const author = useCallbackSelector(
        state => state.usersEntity.users.byId[post?.userId],
        usersActions.getUserByUid(post?.userId)
    )
    
    if(!post) return <Spinner/>
    
    return (<div className='PostPage'>
        <div className='PostPage_Post'>
            <UserImage user={author}/>
            <div>
                <H1>INFO DEL POST {post.title} </H1>
                <p> {post.body} </p>
            </div>
        </div>

        <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.like}/>
        <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.disLike}/>
        <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.save}/>
        
        { AddComment }
        { comments }
    </div>)
}
