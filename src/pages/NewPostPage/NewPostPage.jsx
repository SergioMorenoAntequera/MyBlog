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
import LinesThunks from 'features/linesThunks'
import Line, { LineTypes } from 'types/lineTypes'
import { addLine, updateLine } from 'features/linesSlice'
import LinesApi from 'api/linesAPI'

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
  const linesData = useCallbackSelector (
    state => state.linesEntity.lines.byPost[id],
    LinesThunks.fetchLinesByPost(id),
    state => state.linesEntity.lines.byId
  )
  
  const [post, setPost] = useState(new Post())
  
  useEffect(() => {
    if(!post.id) return
    if(!recoveredPost) return

    setPost(recoveredPost)
  }, [recoveredPost])

  useEffect(() => {
    if(!linesData) return

    setPost(recoveredPost)
  }, [recoveredPost])

  function savePost(publish) {
    var auxPost = {...post}
    if(publish) auxPost.status = PostStatus.PUBLIC
    dispatch(updatePost(auxPost))
    linesData.forEach(line => {
      LinesApi.createNew(line)
    });
    if(publish) navigate(`/posts/${id}`)
  }

  function handlePostTitle(e) {
    let auxPost = {...post};
    auxPost.title = e.target.value
    setPost(auxPost)
  }

  function handlePostLine(e, line) {
    const event = e.nativeEvent
    let auxLine = {...line, content:event.target.value}
    dispatch(updateLine(auxLine))
  }

  function handleEnter(e) {
    const event = e.nativeEvent
    if(event.keyCode !== 13) return;

    dispatch(addLine(new Line(id)))
  }

  function addLineByType(lineType) {
    let newLine = new Line(id)
    newLine.type = lineType;
    dispatch(addLine(newLine))
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
            return <input key={line.id} value={line.content} onChange={(e)=>{handlePostLine(e, line)}} onKeyUp={handleEnter}/>
          }
          case(LineTypes.IMAGE): {
            return <input key={line.id} value={line.content} onChange={(e)=>{handlePostLine(e, line)}} onKeyUp={handleEnter} placeholder="image url"/>
          }
          default: return "Not Supported type yet"
        }

      })}
    </div>
    <div>
      <span style={{marginRight: "20px"}} onClick={()=>{addLineByType(LineTypes.PARAGRAPH)}}> add Paragr </span>
      <span onClick={()=>{addLineByType(LineTypes.IMAGE)}}> add Image </span>
    </div>
    
    <Button variant="contained" onClick={()=>{savePost(true)}} mr="10px"> PUBLISH </Button>
    <Button variant="outlined" onClick={()=>{}}> POST </Button>
  </S.NewPostPage>)
}
