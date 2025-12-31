import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todoSlice';

function TodoItem() {
    const todos = useSelector(state=> state.todos)
    const dispatch = useDispatch();
  return (
    <>
        <div>Todos</div>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={()=> dispatch(removeTodo(todo.id))}>
                        X
                    </button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default TodoItem