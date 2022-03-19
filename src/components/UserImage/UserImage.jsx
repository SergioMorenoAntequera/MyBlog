import React from 'react'
import { Link } from 'react-router-dom'
import "./UserImage.scss"

export default function UserImage({user, redirect = true, onClick}) {

    if(!user) return <></>
    return (<div className='UserImage' onClick={onClick}>
      <Link to={`/user/${user.uid}`} style={{pointerEvents:`${redirect ? 'unset' : 'none'}`}}>
        <img className='UserImage_Image' referrerPolicy="no-referrer" src={user.photoURL} alt={user.displayName} ></img>
      </Link>
    </div>)
}
