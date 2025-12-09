import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function UserProfile() {
    const {user} = useContext(UserContext)
    if(!user || !user.name) return <h1> Please login </h1>
  return (
    <>
    <div>UserProfile</div>
    <h1> WElcome {user.name} </h1>
    
    </>
  )
}

export default UserProfile