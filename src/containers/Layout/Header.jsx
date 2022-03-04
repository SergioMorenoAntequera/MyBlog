import { Link } from 'react-router-dom'
import React from 'react'
import "./Header.scss"

import { SignToggle } from 'components/SignButton'
import { useUser } from 'api/auth'

export default function Header() {
  const { user } = useUser()

  
  return (<div className='Header'>
      <div>
        <Link to={"/"} > Home </Link>
        <Link to={"/users"} > Users </Link>
        <Link to={"/tasks"} > Tasks </Link>
      </div>
      
      <div>
        {user && <Link to={"/user"} > Profile </Link> }
        <SignToggle/>
      </div>
      
  </div>)
}
