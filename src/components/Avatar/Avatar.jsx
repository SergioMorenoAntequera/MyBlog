import React from 'react'
import { Link } from 'react-router-dom'
import * as S from "./Avatar.styled"


export default function Avatar({className, user, redirect = true, onClick, width, height}) {

  
    let hide = user ? "" : "hidden"
    return <S.Avatar className={`Avatar ${className} ${hide}`} onClick={onClick} width={width} height={height}>
      <Link to={`/user/${user?.uid}`} style={{pointerEvents:`${redirect ? 'unset' : 'none'}`}}>
        <img className='Image' referrerPolicy="no-referrer" src={user?.photoURL} alt={user?.displayName} ></img>
      </Link>
    </S.Avatar>
}
