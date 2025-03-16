import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},            // inki functionalities likhe ge hum app.jsx mie 
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider





/*

1. 
TodoContext.js is responsible for creating and providing the context.
2.
 App.jsx (or another provider component) manages the actual state and functions for todos.
3.
 If you define functions inside TodoContext.js, they won’t have access to the component's state because context itself doesn't maintain a state—it just provides values.
4.
 The logic should be in App.jsx, where we have access to React hooks like useState and useReducer for managing todos.
*/