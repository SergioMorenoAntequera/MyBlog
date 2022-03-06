import React from 'react'
import { Link } from 'react-router-dom'
import StyledUserImage from './styledUserImage'

export default function UserImage({user}) {

    if(!user) return <></>
    return (<>
        <Link to={`/user/${user.uid}`} > 
          <StyledUserImage src={user.photoURL} alt={user.displayName} /> 
        </Link>
    </>)
}
