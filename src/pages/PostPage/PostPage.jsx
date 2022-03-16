import { createReaction, removeReaction } from 'actions/reactionsActions'
import { useUser } from 'api/auth'
import H1 from 'components/H1'
import Spinner from 'components/Spinner'
import useComments from 'hooks/useComments'
import useCallbackSelector from 'hooks/useCallbackSelector'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ReactionTypes from 'types/reactions'
import "./style.scss"
import UserImage from 'components/UserImage'
import postActions from 'actions/postsActions'
import usersActions from 'actions/usersActions'
import useReactions from 'hooks/useReactions'


export default function PostPage() {

    const { user } = useUser()
    const { id } = useParams()
    const { comments, AddComment } = useComments(id)
    const { reactionsData, userReaction } = useReactions(id, user)
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

        ❤ {reactionsData.filter(it=> it.type === ReactionTypes.TYPES.like)?.length}
        {!userReaction &&
            <button onClick={()=> {
                dispatch(
                    createReaction({
                        userUid: user.uid, 
                        type: ReactionTypes.TYPES.like, 
                        attachedTo: post.id, 
                        attachedToType: ReactionTypes.ATTACHED_TO_TYPES.comment
                    })
                )
            }}>like</button>
        }
        {userReaction && 
            <button onClick={()=> {
                dispatch(
                    removeReaction({
                        id: userReaction.id,
                        attachedTo: userReaction.attachedTo,
                    })
                )
            }}>cancel</button>
        }
        
        

        
        <AddComment/>
        { comments }
    </div>)
}
