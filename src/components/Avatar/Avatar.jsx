import React from 'react'
import { Link } from 'react-router-dom'
import * as authAPI from "api/auth"
import * as S from "./Avatar.styled"


export default function Avatar({className, user, redirect = true, onClick}) {

    const { user:auxUser } = authAPI.useUser()
    user = user ?? auxUser

    let hide = user ? "" : "hidden"
    return (<S.Avatar className={`Avatar ${className} ${hide}`} onClick={onClick}>
      <Link to={`/user/${user?.uid}`} style={{pointerEvents:`${redirect ? 'unset' : 'none'}`}}>
        <img className='Image' referrerPolicy="no-referrer" src={user?.photoURL} alt={user?.displayName} ></img>
      </Link>

    </S.Avatar>)
}
