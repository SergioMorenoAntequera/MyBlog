import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

import { SignToggle } from 'components/SignButton'
import { useUser } from 'api/auth'
import Avatar from 'components/Avatar'

import * as S from './Header.styled'

export default function Header() {
  
  const { user } = useUser();
  let navigate = useNavigate();

  function handleNewPost() {
    
    navigate("posts/jzuyaRmocpMkXgXIXWPg/edit")
  }

  return (<>
    <S.Header>
      <div>
        <div>
          <Link to={"/"} > Home </Link>
        </div>
      </div>
      
      
      <div>
        {user && <div onClick={handleNewPost}> <a> New Post </a> </div> }
        <Avatar user={user} redirect={false}/>
        <SignToggle/>
      </div>
    </S.Header>
  </>)
}
