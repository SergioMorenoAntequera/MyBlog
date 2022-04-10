import React from 'react'
import { Link } from 'react-router-dom'
import "./Avatar.scss"

export default function Avatar({user, redirect = true, onClick}) {

    if(!user) return <></>  
    return (<div className='Avatar' onClick={onClick}>
      <Link to={`/user/${user.uid}`} style={{pointerEvents:`${redirect ? 'unset' : 'none'}`}}>
        <img className='Avatar_Image' referrerPolicy="no-referrer" src={user.photoURL} alt={user.displayName} ></img>
      </Link>
    </div>)
}
