import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

function Profile() {
  const {user} = useContext(AppContext)
  if(!user || !user.userName) return <div> Please login </div>

  return (
    <>
      <div>Profile</div>
      <h1>Welcome {user.userName}</h1>
    </>
  )
}

export default Profile