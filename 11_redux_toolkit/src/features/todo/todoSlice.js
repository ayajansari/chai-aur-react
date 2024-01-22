import { compose, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      text: "hello world",
      completed: false,
    },
  ],
};

//slice is nothing but features
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      //state -> updated state value in the store
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggle: (state, action) => {
      state.todos.map((todo) =>
        todo.id == action.payload ? (todo.completed = !todo.completed) : todo
      );
    },
    updateTodo: (state, action) => {
      state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.newTodo.text }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggle } = todoSlice.actions;

export default todoSlice.reducer;
