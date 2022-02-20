import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as usersActions from 'actions/usersActions'
import Spinner from 'components/Spinner'
import Fatal from 'components//Fatal'
import { Link } from 'react-router-dom'

function UsersPage(props) {
  
  useEffect(() => {
    props.getAllUsers()
  }, [])
  
  const {
    users,
    loading,
    error,
  } = props
  
  console.log(props)
  if(loading) return <Spinner/>
  if(error) return <Fatal message={error}/>
  return (<>
    {
      users.map((user, index) => 
        <div key={user.id}> 
          <span> { user.name } </span>
          <span> { user.email } </span>
          <span> { user.website } </span>
          <Link to={`users/${user.id}/posts`}>
            <button> See Posts </button>
          </Link>
        </div>
      )
    }
  </>)
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
} 
export default connect(mapStateToProps, usersActions)(UsersPage)
