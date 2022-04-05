import { Link } from 'react-router-dom'
import React from 'react'
import "./Header.scss"

import { SignToggle } from 'components/SignButton'
import { useUser } from 'api/auth'
import UserImage from 'components/UserImage'
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
        <UserImage user={user} redirect={false}/>
        <SignToggle/>
      </div>
    </div>
    
    <div>
      <UserImage user={user}/>
      <SignToggle/>
      <div>      </div>
      <Button color="primary"> asd </Button>
      <Button variant="outlined" color="secondary"> asd </Button>
      <Button variant="contained" > asd </Button>
    </div>
  </>)
}
