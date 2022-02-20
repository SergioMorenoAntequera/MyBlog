import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as usersActions from 'actions/usersActions'
import Spinner from 'components/Spinner'

function PostsPage(props) {
  const { id } = useParams()
  const { users, getAllUsers } = props
  
  useEffect(() => {
    if(!users.length) getAllUsers()
  }, [])
  
  const user = users.find(u => u.id.toString() === id)
  if(!user) return <Spinner/>
  return (<>
    <h2> Blog posts of {user.name}</h2>
    <div>
      Da post page of a users user
    </div>
  </>)
}

const mapStateToProps = (reducers) => reducers.usersReducer
export default connect(mapStateToProps, usersActions)(PostsPage)