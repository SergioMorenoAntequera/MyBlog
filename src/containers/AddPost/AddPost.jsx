import { createPost } from 'actions/postsActions'
import { useUser } from 'api/auth'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from "./AddPost.styled"

export default function AddPost({to}) {

    const dispatch = useDispatch()
    const {user} = useUser()

    const [newPost, setNewPost] = useState({title:"",body:""})

    function crateNewPost(event) {
      event.preventDefault()
      dispatch(createPost(user?.uid, newPost))
      setNewPost({title:"",body:""})
    }

    return (<S.AddPost>
      { user &&
      <form action="GET">
        <label htmlFor=""> title </label>
        <input type="text" value={newPost.title} onChange={e => setNewPost({...newPost, title:e.target.value})} />
        <br />
        <label htmlFor=""> body </label>
        <input type="text" value={newPost.body} onChange={e => setNewPost({...newPost, body:e.target.value})} />
        <br />
        <input type="submit" onClick={crateNewPost}/>
      </form>
    }
    </S.AddPost>)
}
