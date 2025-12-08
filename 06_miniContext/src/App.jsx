import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppContextProvider from './context/AppContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <AppContextProvider>
      <h1>React with vite</h1>
      <Login />
      <Profile />
    </AppContextProvider>
  )
}

export default App
