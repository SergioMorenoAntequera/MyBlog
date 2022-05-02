import { H1, Avatar } from 'components'
import * as authAPI from "api/auth"
import * as S from './NewPostPage.styled' 
import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'components'
import { useDispatch } from 'react-redux'
import { getById, updatePost } from 'actions/postsActions'
import { PostStatus } from 'types/postTypes'
import useCallbackSelector from 'hooks/useCallbackSelector'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import LinesThunks from 'features/linesThunks'

const paragraphSeparator = "\\<br/\\>"
export default function NewPostPage() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  let { id } = useParams()
  const { user } = authAPI.useUser()

  const recoveredPost = useCallbackSelector (
    state => state.postsEntity.posts.byId[id],
    getById(id)
  )
  const recoveredLines = useCallbackSelector (
    state => state.linesEntity.lines.byPost[id],
    LinesThunks.fetchLinesByPost(id)
  )

  const [post, setPost] = useState({title:"", body:"", unsetted:true})
  const [postData, setPostData] = useState([])
  
  
  useEffect(() => {
    if(!post?.unsetted) return
    if(!recoveredPost) return

    setPost(recoveredPost)
  }, [recoveredPost])

  const postDataContainer = useRef(null)
  // useEffect(()=>{
    // postDataContainer?.current?.lastElementChild?.firstChild.focus()
  // }, [postData.length])
  

  function savePost(publish) {
    var auxPost = {...post}
    if(publish) auxPost.status = PostStatus.PUBLIC
    dispatch(updatePost(auxPost))
    if(publish) navigate(`/posts/${id}`)
  }

  function handlePostTitle(e) {
    let auxPost = {...post};
    auxPost.title = e.target.value
    setPost(auxPost)
  }

  function handlePostBody(e, paragraphId) {
    const event = e.nativeEvent

    let _postData = {...postData}
    let _post = {...post}
    
    _postData[paragraphId].content = event.target.value 

    
    setPostData(_postData)
    setPost(_post)
  }

  function handleEnter(e) {
    const event = e.nativeEvent
    if(event.keyCode !== 13) return;

    let _post = {...post}
    let _postData = {...postData}
    
    _post.body += paragraphSeparator
    var id = uuid()
    _postData[id] = { id: id, content:"" }
    
    setPost(_post)
    setPostData(_postData)
  }
  

  return (<S.NewPostPage>
    <H1>
      <Avatar redirect={false} user={user}/>
      New Post 
    </H1>

    <S.TitleInput value={post?.title} onChange={handlePostTitle} name="title" placeholder="My new Adventure..."/>
    <div ref={postDataContainer}>
      {Object.entries(postData).map((paragraph) => 
        <p key={paragraph[1].id}>
          <input value={paragraph[1].content} onChange={(e)=>{handlePostBody(e, paragraph[1].id)}} onKeyPress={handleEnter}/>
        </p>)}
    </div>
    
    <Button variant="contained" onClick={()=>{savePost(true)}} mr="10px"> PUBLISH </Button>
    <Button variant="outlined" onClick={()=>{}}> POST </Button>
  </S.NewPostPage>)
}
