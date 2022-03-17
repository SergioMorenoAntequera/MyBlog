import { createReaction, removeReaction } from 'actions/reactionsActions'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
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

    
    const { id } = useParams()
    const { comments, AddComment } = useComments(id)
    const { reactionNumbers, userReacted, toggleReaction } = useReactions(id)
    const post = useCallbackSelector(
        state => state.postsEntity.posts.byId[id],
        postActions.getById(id)
    )
    const author = useCallbackSelector(
        state => state.usersEntity.users.byId[post?.userId],
        usersActions.getUserByUid(post?.userId)
    )
    
    if(!post) return <Spinner/>
    console.log(reactionNumbers)
    
    return (<div className='PostPage'>
        <div className='PostPage_Post'>
            <UserImage user={author}/>
            <div>
                <H1>INFO DEL POST {post.title} </H1>
                <p> {post.body} </p>
            </div>
        </div>

        <div onClick={()=>{toggleReaction(ReactionTypes.TYPES.like)}} style={{cursor:"pointer"}}>
            {!userReacted && <AiOutlineHeart />}
            {userReacted && <AiFillHeart />}
            {reactionNumbers}
        </div>
        
        
        
        

        
        <AddComment/>
        { comments }
    </div>)
}
