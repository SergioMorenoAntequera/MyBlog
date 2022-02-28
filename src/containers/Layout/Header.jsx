import { Link } from 'react-router-dom'
import { useUser } from 'api/auth'
import "./Header.scss"
import React from 'react'

export default function Header() {
  const { user, SignToggle } = useUser()
  
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
