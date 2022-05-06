import { H1, Avatar } from 'components'
import * as authAPI from "api/auth"
import * as S from './NewPostPage.styled' 
import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { getById, updatePost } from 'actions/postsActions'
import Post, { PostStatus } from 'types/postTypes'
import useCallbackSelector from 'hooks/useCallbackSelector'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import LinesThunks from 'features/linesThunks'
import { LineTypes } from 'types/lineTypes'

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
  const linesData = useSelector(state => {
      return recoveredLines?.map(line =>
        state.linesEntity.lines.byId[line]
      )  
  })
  
  

  const [post, setPost] = useState(new Post())
  const [postData, setPostData] = useState([])
  
  
  useEffect(() => {
    if(!post.id) return
    if(!recoveredPost) return

    setPost(recoveredPost)
  }, [recoveredPost])

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

  function handlePostLine(e, lineId) {
    const event = e.nativeEvent

  }
  

  return (<S.NewPostPage>
    <H1>
      <Avatar redirect={false} user={user}/>
      New Post 
    </H1>

    <S.TitleInput value={post?.title} onChange={handlePostTitle} name="title" placeholder="My new Adventure..."/>
    <div>
      {linesData?.map(line => { 

        switch(line.type) {
          case(LineTypes.PARAGRAPH): {
            return <input key={line.id} value={line.content} onChange={(e)=>{handlePostLine(e, line.id)}} />
          }
          default: return "Not Supported type yet"
        }

      })}
    </div>
    
    <Button variant="contained" onClick={()=>{savePost(true)}} mr="10px"> PUBLISH </Button>
    <Button variant="outlined" onClick={()=>{}}> POST </Button>
  </S.NewPostPage>)
}
