import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppContextProvider from './context/AppContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import UserProfile from './components/UserProfile'
import UserLogin from './components/UserLogin'

function App() {

  return (
    // <AppContextProvider>
    //   <h1>React with vite</h1>
    //   <Login />
    //   <Profile />
    // </AppContextProvider>
    <UserContextProvider>
      <UserLogin />
      <UserProfile />
    </UserContextProvider>
  )
}

export default App
