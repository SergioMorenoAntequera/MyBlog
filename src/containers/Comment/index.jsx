import { getUserByUid } from 'actions/usersActions'
import UserImage from 'components/UserImage'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.scss"

export default function Comment({comment: {body, userUid, createdAt}}) {
    const dispatch = useDispatch()
    let user = useSelector(state=> state.usersEntity.users.byId[userUid] )
    
    useEffect(() => {
        if(user) return
        dispatch(getUserByUid(userUid))
    }, [])
    

    return (<div className='Comment'>
        <UserImage user={user}/>
        { body }
    </div>)
}
