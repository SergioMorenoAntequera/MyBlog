import { H1, Avatar } from 'components'
import * as authAPI from "api/auth"
import * as S from './NewPostPage.styled' 
import React, { useRef, useState } from 'react'
import { Button } from 'components'
import { useDispatch } from 'react-redux'
import { createPost } from 'actions/postsActions'

export default function NewPostPage() {
  
  const dispatch = useDispatch()
  const { user } = authAPI.useUser()
  const postTitle = useRef()
  const postBody = useRef()

  function crateNewPost(event) {
    event.preventDefault()
    let newPost = {
      title: postTitle.current.value,
      body: postBody.current.value
    }
    dispatch(createPost(user?.uid, newPost))
  }

  return (<S.NewPostPage>

    <H1>
      <Avatar user={user} redirect={false}/>
      New Post 
    </H1>
    <S.TitleInput ref={postTitle} placeholder="My new Adventure..."/>
    <S.BodyTextArea ref={postBody} placeholder="Lorem..."/>

    <Button variant="contained" onClick={crateNewPost}> POST </Button>
  </S.NewPostPage>)
}
