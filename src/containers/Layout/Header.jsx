import { Link } from 'react-router-dom'
import { useUser } from 'api/auth'
import React from 'react'

export default function Header() {
  const [user, SignToggle] = useUser()
  
  return (<div>
      <Link to={"/"} > Home </Link>
      <Link to={"/users"} > Users </Link>
      <Link to={"/tasks"} > Tasks </Link>

      <SignToggle/>
  </div>)
}
