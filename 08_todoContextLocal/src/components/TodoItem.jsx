import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoItem({todoObj}) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg , setTodoMsg] = useState(todoObj.todo)
    const {toggleComplete, deleteTodo, updateTodo} = useTodo()

    const editTodo = () => {
        updateTodo(todoObj.id, {...todoObj, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = ()  => {
        toggleComplete(todoObj.id);
    }
  return (
    <div className={`flex border px-3 py-1.5 text-black
     ${todoObj.completed ? "bg-white": "bg-pink-200"}`}>
        <input
            type="checkbox"
            checked={todoObj.completed}
            onChange={toggleCompleted}   
        />
        <input 
            type='text'
            className={`border outline-none w-full 
                ${isTodoEditable ? "border-black":"border-transparent"}
                ${todoObj.completed ? "line-through": ""}`}
            value={todoMsg}
            onChange={(e)=> setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
        />
        <button 
            className='inline-flex w-8 h-8 rounded-lg '
            onClick={() => {
                if(todoObj.completed) return;
                if(isTodoEditable){
                    editTodo();
                } else setIsTodoEditable((prev) => !prev)
            }}
            disabled={todoObj.completed}
        >
            {isTodoEditable ? "📁" : "✏️"}
        </button>
        <button
            onClick={()=> deleteTodo(todoObj.id)}
        >
             ❌
        </button>
    </div>
  )
}

export default TodoItem 