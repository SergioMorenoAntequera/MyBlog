import { getById } from 'actions/postsActions'
import H1 from 'components/H1'
import Spinner from 'components/Spinner'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function PostPage() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const post = useSelector(state => state.postsEntity.posts.byId[id])

    console.log(post)
    useEffect(() => {
        if(post) return 
        dispatch(getById(id))
    }, [])
    

    if(!post) return <Spinner/>
    return (
        <div>
            <H1>INFO DEL POST {post.title} </H1>
            
        </div>
    )
}
