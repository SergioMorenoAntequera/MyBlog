import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from 'actions/usersActions'
import { Link } from 'react-router-dom'
import Spinner from 'components/Spinner'
import Fatal from 'components//Fatal'
import H1 from 'components/H1'


function UsersPage(props) {
  const dispatch = useDispatch();
  const {users, loading, error} = useSelector(state => state.usersReducer)

  useEffect(() => {
    if(users.length > 0) return
    dispatch(getAllUsers())
  }, [])
  
  if(loading) return <Spinner/>
  if(error) return <Fatal message={error}/>
  return (<>
    <H1> Users List </H1>
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

export default UsersPage
