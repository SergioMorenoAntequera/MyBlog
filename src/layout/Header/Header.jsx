import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

import { SignToggle } from 'components/SignButton'
import { useUser } from 'api/auth'
import Avatar from 'components/Avatar'

import * as S from './Header.styled'
import { createPost } from 'actions/postsActions'
import { useDispatch } from 'react-redux'

export default function Header() {
  
  const { user } = useUser();
  const dispatch = useDispatch()
  let navigate = useNavigate();

  async function handleNewPost() {
    const newPost = await dispatch(createPost(user.uid, {title:"", body:""}))
    navigate(`posts/${newPost.id}/edit`)
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
        <Avatar user={user}/>
        <SignToggle/>
      </div>
    </S.Header>
  </>)
}
