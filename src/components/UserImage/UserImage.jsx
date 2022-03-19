import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

export default function UserImage({user, redirect}) {

    if(!user) return <></>
    return (<>
        <Link className='UserImage' to={`/user/${user.uid}`} >
          <img className='UserImage_Image' referrerPolicy="no-referrer" src={user.photoURL} alt={user.displayName} ></img>
        </Link>
    </>)
}
