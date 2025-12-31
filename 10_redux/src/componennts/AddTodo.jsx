import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { addTodo } from '../features/todoSlice';


function AddTodo() {
    const [text, setText]= useState('')
    const dispatch = useDispatch();

    const addTodoHandler =(e)=> {
         e.preventDefault()   
         dispatch(addTodo(text))
         setText('')
    }


  return (
    <form onSubmit={addTodoHandler}>
      <input 
            type='text'
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder='type the todo'
      />
      <button type="submit"> ADD
      </button>

    </form>
  )
}

export default AddTodo;