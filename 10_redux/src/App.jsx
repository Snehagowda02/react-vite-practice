import { useState } from 'react'
import './App.css'
import AddTodo from './componennts/AddTodo'
import TodoItem from './componennts/TodoItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>React Redux</h1>
      <AddTodo />
      <TodoItem />
 
    </>
  )
}

export default App
