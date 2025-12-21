import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoContextProvider , TodoContext} from './context/TodoContext'

function App() {
  // need lazy initialization here to work with localStorage
  //this localStorage always return and takes values in string so need to parse to json or string
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos")
    return storedTodos? JSON.parse(storedTodos): []
  })
  // for you are not getting todoMsg insted you are getting todoObj
  const addTodo = (todoObj) => {
    setTodos((prev) => [ {id: Date.now(),...todoObj}  , ...prev])
  }
  const updateTodo = (id, todoObj) => {
    setTodos((prev)=> prev.map((eachTodo) => (eachTodo.id === id? todoObj : eachTodo)))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id != id))
  }
  const toggleCompleted = (id) => {
    setTodos((prev)=> prev.map((eachTodo)=> eachTodo.id === id ? 
    {...eachTodo, completed : !eachTodo.completed} 
    : eachTodo))
  }

  useEffect(()=> {
  localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoContextProvider value= {{todos, addTodo, deleteTodo, updateTodo, toggleCompleted}}>
      <div>
      <TodoForm />
      </div>
      <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem todoObj={todo}/>
          </div>
      ))}
      </div>    
    </TodoContextProvider>
  )
}

export default App
