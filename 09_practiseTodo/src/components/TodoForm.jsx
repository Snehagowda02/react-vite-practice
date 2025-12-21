import React from 'react'
import useTodo from '../context/TodoContext'
import { useState } from 'react';

function TodoForm() {
    const [todoMsg, setTodoMsg] = useState("")
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault()
        // preventing to add empty todo
        if(!todoMsg) return;  
        addTodo({todo: todoMsg, completed:false})
        setTodoMsg("")
    }
  return (
    <>
    <form onSubmit={add}>
    <input 
        type='text'
        placeholder='Write your Todo'
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}

    />
    <button >
        ADD
    </button>
    </form>

    </>
  )
}

export default TodoForm