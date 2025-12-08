import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')


    // wrirting into the context
    const {setUser} = useContext(AppContext)

    const handleSubmit = (e) => {
      console.log("e is ", e) // e is button event 
      // you'll not get e.target.value -- it will be ""
      // but if you can e.target.value to user entered value then console.log near input tag
      e.preventDefault()
      setUser({userName, password})   
    }

  return (
    <>
    <div>Login</div>
    <input type='text' placeholder='username' onChange={(e) => setUserName(e.target.value)}/>
    {" "}
    <input type='text' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
    <button onClick={handleSubmit} >Submit</button>
    </>
  )
}

export default Login