import React from 'react'
import useTodo from '../context/TodoContext'
import { useState } from 'react'


function TodoItem({todoObj}) {
    const { toggleCompleted , updateTodo, deleteTodo} = useTodo()
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [ todoMsg, setTodoMsg]= useState(todoObj.todo)

   const editTodo = () => {
    updateTodo(todoObj.id, {...todoObj, todo: todoMsg})
    setIsTodoEditable(false)
   }
  return (
    <>
    <input
        type='checkbox' 
        checked={todoObj.completed}
        onChange={() =>  toggleCompleted(todoObj.id)}
    />
    <input 
        type='text'
        value={todoMsg}
        onChange={(e)=> setTodoMsg(e.target.value) }
        readOnly={!isTodoEditable}
    />
    <button 
        onClick={ () => {
             if(todoObj.completed) return;
            if(isTodoEditable)
            {
                editTodo();
            }else setIsTodoEditable((prev) => !prev)
        }}
        disabled={todoObj.completed}

    >
        {isTodoEditable ? "ed" : "sa"}
    </button>
    <button onClick={() => deleteTodo(todoObj.id)}>
        X
    </button>
    </>
  )
}

export default TodoItem