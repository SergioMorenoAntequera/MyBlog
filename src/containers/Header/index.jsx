import { Link } from 'react-router-dom'
import React from 'react'

export default function Header() {
  return (<div>
      <Link to={"/"} > Users </Link>
      <Link to={"/tasks"} > Tasks </Link>
  </div>)
}
