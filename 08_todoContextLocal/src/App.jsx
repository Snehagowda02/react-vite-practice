import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider, useTodo } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  //const [todos, setTodos] = useState([])
  // const [count, setCount] = useState(0)

  // todo is itself a object, So spread it and add 

    // lazy initialization
  const [todos, setTodos] = useState(() => {
  const storedTodos = localStorage.getItem("todos")
    console.log("todos in localStorage is", storedTodos);
  return storedTodos ? JSON.parse(storedTodos) : []
})

  const addTodo = (todoObj) => {
    setTodos((prev) => [{id: Date.now() ,...todoObj}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((eachTodo) => (eachTodo.id === id? todo : eachTodo)))

  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id != id))

  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? 
    // need to retain other fields as ssame , so use spread
    {...eachTodo, completed: !eachTodo.completed} : eachTodo))

// in the old todos need to map for given id
// so we have use from prev values prev.map and take eachTodo
// check for id match
///// if does not match, nothing to do return that eachTodo element
//// if matched , spread that obj(keeps other fields same as it) and toggle that value(!eachTodo.completed)
  }

  // useEffect(() => {
  //   const parssedtodos = JSON.parse(localStorage.getItem("todos")) // key value needs to be given
  //   console.log("todos in localStorage is", parssedtodos);
  //   console.log("todos is", todos)
  //   // this localStorage always return and takes values in string so need to parse to json
  //   if(parssedtodos){
  //     setTodos(parssedtodos)
  //   }
  // }, [])

  // localStorage always return and takes values in string
  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
     console.log("todos is", todos)
  }, [todos])




  return (
    <TodoProvider value={{todos, addTodo, updateTodo, toggleComplete, deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          >
                        <TodoItem todoObj={todo}/>
                        </div>))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
