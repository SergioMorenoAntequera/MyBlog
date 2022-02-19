import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as usersActions from 'actions/usersActions'

function UsersPage(props) {
  
  useEffect(() => {
    props.getAllUsers()
  }, [])
  
  const {
    users,
    loading,
  } = props
  
  console.log(props)
  return (<>
    {loading && !users && <p> loading data we </p>}
    
    {!loading && users &&
      users.map(user => 
        <div key={user.id}> { user.name } </div>
      )
    }
  </>)
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
} 
export default connect(mapStateToProps, usersActions)(UsersPage)
