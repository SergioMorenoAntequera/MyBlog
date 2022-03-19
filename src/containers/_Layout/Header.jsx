import { Link } from 'react-router-dom'
import React from 'react'
import "./Header.scss"

import { SignToggle } from 'components/SignButton'
import { useUser } from 'api/auth'
import UserImage from 'components/UserImage'

export default function Header() {
  
  const { user } = useUser()

  return (<>
    <div className='HeaderOffset'> </div>
    <div className='Header'>
      <div>
        <Link to={"/"} > Home </Link>
      </div>
      
      <div>
        <UserImage user={user}/>
        <SignToggle/>
      </div>
    </div>
  </>)
}
