import { getUserByUid } from 'actions/usersActions'
import Reaction from 'components/Reaction'
import UserImage from 'components/UserImage'
import useComments from 'hooks/useComments'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactionsTypes from 'types/reactions'
import "./style.scss"

export default function Comment({comment: {id, body, userUid, createdAt}}) {
    const dispatch = useDispatch()
    let user = useSelector(state=> state.usersEntity.users.byId[userUid] )
    let { comments, AddComment } = useComments(id)
    
    useEffect(() => {
        if(user) return
        dispatch(getUserByUid(userUid))
    }, [])
    

    return (<div className='Comment'>
        <div className='body'>
            <div>
                <UserImage user={user}/>
            </div>
            <div>
                <p> { new Date(createdAt.toDate()).toString() } </p>
                <p> { body } </p>
            </div>    
        </div>

        <Reaction attachedToId={id} reactionType={ReactionsTypes.TYPES.like}/>

        <div className='comments'>
            { AddComment }
            { comments }
        </div>
    </div>)
}
