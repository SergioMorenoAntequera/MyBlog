import { Link } from 'react-router-dom'
import React from 'react'
import "./Header.scss"

import { SignToggle } from 'components/SignButton'
import { useUser } from 'api/auth'
import Avatar from 'components/Avatar'
import Button from 'components/Button'

export default function Header() {
  
  const { user } = useUser()

  return (<>
    <div className='HeaderOffset'> </div>
    <div className='Header'>
      <div>
        <div>
          <Link to={"/"} > Home </Link>
        </div>
        <div>
          <Link to={"/news"} > News </Link>
        </div>
      </div>
      
      
      <div>
        <Avatar user={user} redirect={false}/>
        <SignToggle/>
      </div>
    </div>
  </>)
}
