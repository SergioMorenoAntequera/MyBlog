import { createReaction } from 'actions/reactionsActions'
import { useUser } from 'api/auth'
import H1 from 'components/H1'
import Spinner from 'components/Spinner'
import useComments from 'hooks/useComments'
import useCallbackSelector from 'hooks/useCallbackSelector'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as ReactionTypes from 'types/reactions'
import "./style.scss"
import UserImage from 'components/UserImage'
import postActions from 'actions/postsActions'
import usersActions from 'actions/usersActions'


export default function PostPage() {

    const { user } = useUser()
    const { id } = useParams()
    const { comments, AddComment } = useComments(id)
    const dispatch = useDispatch()
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

        <button onClick={()=> {
            dispatch(
                createReaction({
                    userUid: user.uid, 
                    type: ReactionTypes.TYPES.like, 
                    attachedTo: post.id, 
                    attachedToType: ReactionTypes.ATTACHED_TO_TYPES.comment
                })
            )
            
        }}>react</button>

        <AddComment/>
        { comments }
    </div>)
}
