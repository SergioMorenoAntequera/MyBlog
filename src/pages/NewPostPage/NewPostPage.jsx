import { H1, Avatar } from 'components'
import * as authAPI from "api/auth"
import * as S from './NewPostPage.styled' 
import React from 'react'

export default function NewPostPage() {
  
  const { user } = authAPI.useUser()

  return (<div>

    <H1>
      <Avatar user={user} redirect={false}/>
      New Post 
    </H1>
    <S.TitleInput placeholder="My new Adventure..."/>
  </div>)
}
