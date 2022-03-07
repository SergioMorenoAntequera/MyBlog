import { getUserByUid } from 'actions/usersActions'
import UserImage from 'components/UserImage'
import useComments from 'hooks/useComments'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
        
        <div className='comments'>
            <AddComment to={id}/>
            { comments }
        </div>
    </div>)
}
