import React from 'react'
import useFetchData from '../../Hooks/useFetchData'


export default function UsersPage() {

  const {
    data : users,
    // setData: setUsers,
    loading,
    // error
  } = useFetchData("https://jsonplaceholder.typicode.com/users")
  

  return (<>
    {loading && <p> loading we </p>}
    
    {!loading && 
      users.map(user => 
        <div key={user.id}> { user.name } </div>
      )
    }
  </>)
}
