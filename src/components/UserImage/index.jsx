import { useUser } from 'api/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import StyledUserImage from './styledUserImage'

export default function UserImage() {

    const { user } = useUser()

    if(!user) return <></>
    return (<>
        <Link to={"/user"} > 
          <StyledUserImage src={user.photoURL} alt={user.displayName} /> 
        </Link>
    </>)
}
