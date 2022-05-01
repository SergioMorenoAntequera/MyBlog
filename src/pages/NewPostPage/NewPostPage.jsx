import { H1, Avatar } from 'components'
import * as authAPI from "api/auth"
import * as S from './NewPostPage.styled' 
import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'components'
import { useDispatch } from 'react-redux'
import { createPost } from 'actions/postsActions'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { PostStatus } from 'types/postTypes'

export default function NewPostPage() {
  
  const dispatch = useDispatch()
  
  const postTitle = useRef()
  const postBody = useRef()

  const { user } = authAPI.useUser()

  let post = {
    status: PostStatus.DRAFT,
    title: "",
    body: ""
  } 

  useEffect(() => {
    // setInterval(() => {
    //   var auxPost = {...post}
    //   auxPost.title = postTitle.current.value
    //   auxPost.body = postBody.current.value
    // }, 3000);    
  }, [])

  function crateNewPost(event) {
    // event.preventDefault()
    // var auxPost = {...post}
    // auxPost.title = postTitle.current.value
    // auxPost.body = postBody.current.value
    // auxPost.status = PostStatus.PUBLIC
    // dispatch(createPost(user?.uid, auxPost))
  }

  return (<S.NewPostPage>

    <H1>
      <Avatar redirect={false} user={user}/>
      New Post 
    </H1>
    <S.TitleInput ref={postTitle} placeholder="My new Adventure..."/>
    <S.BodyTextArea ref={postBody} placeholder="Lorem..."/>

    <Button variant="contained" onClick={crateNewPost} mr="10px"> PUBLISH </Button>
    <Button variant="outlined" onClick={()=>{}}> POST </Button>
  </S.NewPostPage>)
}
