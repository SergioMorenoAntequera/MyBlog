import { Link } from 'react-router-dom'
import React from 'react'
import "./Header.scss"

import { SignToggle } from 'components/SignButton'
import { useUser } from 'api/auth'
import UserImage from 'components/UserImage'

export default function Header() {
  
  
  return (<div className='Header'>
      <div>
        <Link to={"/"} > Home </Link>
        <Link to={"/users"} > Users </Link>
      </div>
      
      <div>
        <UserImage/>
        <SignToggle/>
      </div>
      
  </div>)
}
