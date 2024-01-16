import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "msg",
      complete: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: (id) => {},
  //again above all are function initilizations not definitions , funtionalities will be defined in app.jsx with the same name
});

export const TodoProvider = TodoContext.Provider;
export function useTodo() {
  return useContext(TodoContext);
  //because of this no need to use useContext(TodoContext) in components we can directly
  //use useTodo() and extract variable and functions
}
