import {createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "jglakj",
            completed: false
        }
    ],
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    updateTodo: (id, todo) => {},
    toggleCompleted: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo() {
    return useContext(TodoContext)
}