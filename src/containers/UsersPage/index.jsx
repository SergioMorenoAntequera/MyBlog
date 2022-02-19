import React from 'react'
import { connect } from 'react-redux'


function UsersPage(props) {
  
  const {
    users,
    // setData: setUsers,
    loading,
    // error
  } = props
  
  return (<>
    {loading && <p> loading we </p>}
    
    {!loading && 
      users.map(user => 
        <div key={user.id}> { user.name } </div>
      )
    }
  </>)
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
} 
export default connect(mapStateToProps, {/* Actions */})(UsersPage)
