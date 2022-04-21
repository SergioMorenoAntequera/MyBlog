import { H1, Avatar } from 'components'
import * as authAPI from "api/auth"
import * as S from './NewPostPage.styled' 
import React, { useEffect, useRef } from 'react'
import { Button } from 'components'
import { useDispatch } from 'react-redux'
import { createPost } from 'actions/postsActions'
import { useLocalStorage } from 'hooks/useLocalStorage'

export default function NewPostPage() {
  
  const dispatch = useDispatch()
  const { user } = authAPI.useUser()
  const postTitle = useRef()
  const postBody = useRef()

  let newPost = {
    title: "",
    body: ""
  } 
  const {storageItem, setStorageItem, loading} = useLocalStorage("DRAFT_POST_V1", newPost)

  useEffect(() => {
    setInterval(() => {
      if(loading) return
      var auxStorageItem = {...storageItem}
      auxStorageItem.title = postTitle.current.value
      auxStorageItem.body = postBody.current.value
      setStorageItem(auxStorageItem)
    }, 3000);
  }, [])
  

  function crateNewPost(event) {
    event.preventDefault()
    var auxStorageItem = {...storageItem}
    auxStorageItem.title = postTitle.current.value
    auxStorageItem.body = postBody.current.value

    dispatch(createPost(user?.uid, auxStorageItem))
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
