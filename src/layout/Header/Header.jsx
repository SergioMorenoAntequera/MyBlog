import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

import { SignToggle } from 'components/SignButton'
import { useUser } from 'api/auth'
import Avatar from 'components/Avatar'

import * as S from './Header.styled'
import { createPost } from 'actions/postsActions'
import { useDispatch } from 'react-redux'
import Post from 'types/postTypes'

export default function Header() {
  
  const { user } = useUser();
  const dispatch = useDispatch()
  let navigate = useNavigate();

  async function handleNewPost() {
    let newPost = new Post(user.uid)
    newPost = await dispatch(createPost(newPost))
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
