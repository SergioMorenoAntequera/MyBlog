import { getById } from 'actions/postsActions'
import { createReaction } from 'actions/reactionsActions'
import { useUser } from 'api/auth'
import H1 from 'components/H1'
import Spinner from 'components/Spinner'
import useComments from 'hooks/useComments'
import useReduxState from 'hooks/useReduxState'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as ReactionTypes from 'types/reactions'

export default function PostPage() {

    const { user } = useUser()
    const { id } = useParams()
    const { comments, AddComment } = useComments(id)
    const dispatch = useDispatch()
    const post = useReduxState (
        state => state.postsEntity.posts.byId[id],
        getById(id)
    )

    if(!post) return <Spinner/>
    return (<div className='PostPage'>
        <div className='PostPage_Post'>
            <H1>INFO DEL POST {post.title} </H1>
            <p> {post.body} </p>
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
