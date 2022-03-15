import React from 'react'
import { Link } from 'react-router-dom'
import StyledUserImage from './styledUserImage'
import "./style.scss"

export default function UserImage({user}) {

    if(!user) return <></>
    return (<>
        <Link className='UserImage' to={`/user/${user.uid}`} >
          <img className='UserImage_Image' referrerpolicy="no-referrer" src={user.photoURL} alt={user.displayName} ></img>
        </Link>
    </>)
}
