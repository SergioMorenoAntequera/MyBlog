import React from 'react'
import { useParams } from 'react-router-dom'

function PostsPage(props) {
  const { id } = useParams()

  return (
    <div>
      Da post page of a users {id}
    </div>
  )
}

export default PostsPage