import { Link } from 'react-router-dom'
import React from 'react'
import "./Header.scss"

import { SignToggle } from 'components/SignButton'
import { useUser } from 'api/auth'
import UserImage from 'components/UserImage'
import Button from 'components/Button'

export default function Header() {
  
  const { user } = useUser()

  return (<div className='Header'>
    <div>
      <Link to={"/"} > Home </Link>
      <Link to={"/users"} > Users </Link>
    </div>
    
    <div>
      <UserImage user={user}/>
      <SignToggle/>
      
      <Button text> Outlined </Button>
      <Button outlined> Outlined </Button>
      <Button contained> Contained </Button>
    </div>
  </div>)
}
