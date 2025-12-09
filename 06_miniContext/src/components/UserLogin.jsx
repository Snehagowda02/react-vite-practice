import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function UserLogin() {
    const {setUser} = useContext(UserContext)
    const [name, setName]= useState('')
    const [userID, setUserID] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({name, userID})

    }

  return (
    <>
    <div>UserLogin</div>
    <input type='text' placeholder='Please enter Name' onChange={(e) => setName(e.target.value)}/>
    <input type='text' placeholder='Enter userID' onChange={(e) => setUserID(e.target.value)}/>
    <button onClick={handleSubmit}>Submit</button>
    </>

  )
}

export default UserLogin