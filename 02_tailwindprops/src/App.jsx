import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  let Obj = {
    user: "snagala",
    dep: "cse"
  }

  let newArr = [1,2,3,4]
  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl p-4'>Tailwind test</h1>
    <Card name="Sneha"  />
    </>
  )
}

export default App
