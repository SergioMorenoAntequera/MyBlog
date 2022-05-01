import { H1, Avatar } from 'components'
import * as authAPI from "api/auth"
import * as S from './NewPostPage.styled' 
import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'components'
import { useDispatch } from 'react-redux'
import { createPost, getById, updatePost } from 'actions/postsActions'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { PostStatus } from 'types/postTypes'
import useCallbackSelector from 'hooks/useCallbackSelector'
import { useParams } from 'react-router-dom'

export default function NewPostPage() {
  
  const dispatch = useDispatch()
  let { id } = useParams()
  const { user } = authAPI.useUser()

  const recoveredPost = useCallbackSelector (
    state => state.postsEntity.posts.byId[id],
    getById(id)
  )
  const [post, setPost] = useState({title:"", body:"", unsetted:true})

  useEffect(() => {
    if(!post?.unsetted) return
    setPost(recoveredPost)
  }, [recoveredPost])
  

  function savePost(publish) {
    var auxPost = {...post}
    if(publish) {
      auxPost.status = PostStatus.PUBLIC
    }
    dispatch(updatePost(auxPost))
  }

  function handlePostInput({target}) {
    let auxPost = {...post};
    auxPost[target.name] = target.value
    setPost(auxPost)
  }

  return (<S.NewPostPage>
    <H1>
      <Avatar redirect={false} user={user}/>
      New Post 
    </H1>
    <S.TitleInput value={post?.title} onChange={handlePostInput} name="title" placeholder="My new Adventure..."/>
    <S.BodyTextArea value={post?.body} onChange={handlePostInput} name="body" placeholder="Lorem..."/>

    <Button variant="contained" onClick={()=>{savePost(true)}} mr="10px"> PUBLISH </Button>
    <Button variant="outlined" onClick={()=>{}}> POST </Button>
  </S.NewPostPage>)
}
