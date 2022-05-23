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
import Line, { LineTypes, renderLine } from 'types/lineTypes'
import * as LinesFeatures from 'features/linesSlice'
import LinesAPI from 'api/linesAPI'

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
  )?.sort((a, b) => a.position - b.position)
  
  const [post, setPost] = useState(new Post())
  const [focusedLine, setFocusedLine] = useState(linesData ? linesData[0] : null)
  
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
      dispatch(LinesThunks.updateLine(line))
    });

		var actualLinesIds = linesData.map(l=>l.id)
		LinesAPI.getByPost(post.id).then(fetchedLines => {
			fetchedLines.forEach(line => {
				if(actualLinesIds.includes(line.id)) return;
				LinesAPI.remove(line.id)
			})
		})

    if(publish) navigate(`/posts/${id}`)
  }


  function onTitleChange(e) {
    let auxPost = {...post};
    auxPost.title = e.target.value
    setPost(auxPost)
  }
  function onLineContentChange(e, line) {
    const event = e.nativeEvent
    let auxLine = {...line, content:event.target.value}
    dispatch(LinesFeatures.updateLine(auxLine))
  }


  function addLine(lineType = LineTypes.PARAGRAPH.id) {
    let newLine = new Line(id)
    newLine.type = lineType;
    newLine.position = focusedLine.position + 1
    
    linesData
      .filter(line => line.position >= newLine.position)
      .forEach(line => {
        dispatch(LinesFeatures.updateLine({...line, position:++line.position}))
      })

    dispatch(LinesFeatures.addLine(newLine))
    return newLine
  }
	function updateLineType(line, newType) {
		dispatch(LinesFeatures.updateLine({...line, type:newType}))
	}
	function removeLine(line) {
		dispatch(LinesFeatures.removeLine(line))
	}

  function handleEnter(e) {
    const event = e.nativeEvent
    if(event.keyCode !== 13) return;
    
    let newLine = addLine()
    console.log(newLine)
  }


  return (<S.NewPostPage>
    <S.TitleInput value={post?.title} onChange={onTitleChange} name="title" placeholder="My new Adventure..."/>
    <section>
			{linesData?.map(line => <div key={line.id}>
				<S.ChangeLineType> 
					Change to:
          {Object.entries(LineTypes).map( lineTypeName => {
            let lineType = lineTypeName[1]
            
            return <span 
              className={`${line.type === lineType.id ? 'selected':''}`} 
              onClick={()=>{updateLineType(line, lineType.id)}}> 
              { lineType.name } 
            </span>

          })}
				</S.ChangeLineType>
          
        {line.position}
				{ renderLine(line, {
            onChange:(e)=>{onLineContentChange(e, line)}, 
            onKeyUp:handleEnter,
            onFocus:(e)=>{setFocusedLine(line)}
        })}

        {/* <p contentEditable="true" onKeyUp={handleEnter}>
          {line.content}
        </p>  */}

				<span  onClick={()=>{removeLine(line)}}> remove Line</span>
			</div>)}
    </section>

    <footer>
      {Object.keys(LineTypes).map(lineTypeName => {
        let lineType = LineTypes[lineTypeName]
        return <Button style={{marginRight: "20px"}} onClick={()=>{addLine(lineType.id)}}> add {lineType.name} </Button>
      })}
    </footer>
    
    <Button variant="contained" onClick={()=>{savePost(true)}} mr="10px"> PUBLISH </Button>
    <Button variant="outlined" onClick={()=>{}}> POST </Button>
  </S.NewPostPage>)
}
