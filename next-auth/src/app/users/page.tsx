import React from 'react'

interface User {
  id: number,
  name: string,
}

const UsersPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json();

  return (
	  <>
      <h1 className='text-3xl font-bold'>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage