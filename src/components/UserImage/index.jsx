import React from 'react'
import { Link } from 'react-router-dom'
import StyledUserImage from './styledUserImage'

export default function UserImage({user}) {

    if(!user) return <></>
    return (<>
        <Link to={`/user/${user.uid}`} >
          <StyledUserImage referrerpolicy="no-referrer" src={user.photoURL} alt={user.displayName} ></StyledUserImage>
        </Link>
    </>)
}
