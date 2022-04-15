import { Link } from 'react-router-dom'
import React from 'react'

import { SignToggle } from 'components/SignButton'
import { useUser } from 'api/auth'
import Avatar from 'components/Avatar'

import * as S from './Header.styled'

export default function Header() {
  
  const { user } = useUser()

  return (<>
    <S.Header>
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
    </S.Header>
  </>)
}
