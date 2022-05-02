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
import { useNavigate, useParams } from 'react-router-dom'
import { placeCaretAtEnd } from './utils'

export default function NewPostPage() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { id } = useParams()
  const { user } = authAPI.useUser()

  const recoveredPost = useCallbackSelector (
    state => state.postsEntity.posts.byId[id],
    getById(id)
  )
  const [post, setPost] = useState({title:"", body:"", unsetted:true})
  const postBody = useRef(null)
  


  useEffect(() => {
    if(!post?.unsetted) return
    if(!recoveredPost) return
    setPost(recoveredPost)
  }, [recoveredPost])
  

  function savePost(publish) {
    var auxPost = {...post}
    if(publish) auxPost.status = PostStatus.PUBLIC
    dispatch(updatePost(auxPost))
    if(publish) navigate(`/posts/${id}`)
  }

  function handlePostInput({target}) {
    let auxPost = {...post};
    auxPost[target.name] = target.value
    setPost(auxPost)
    placeCaretAtEnd(postBody.current)
  }
  

  return (<S.NewPostPage>
    <H1>
      <Avatar redirect={false} user={user}/>
      New Post 
    </H1>
    <S.TitleInput value={post?.title} onChange={handlePostInput} name="title" placeholder="My new Adventure..."/>
    
    <div contentEditable={true} suppressContentEditableWarning={true} ref={postBody}
      onInput={e => handlePostInput({target:{value:e.currentTarget.textContent, name:"body"}}) }>
      {post.body}
    </div>
    
    

    <Button variant="contained" onClick={()=>{savePost(true)}} mr="10px"> PUBLISH </Button>
    <Button variant="outlined" onClick={()=>{}}> POST </Button>
  </S.NewPostPage>)
}
