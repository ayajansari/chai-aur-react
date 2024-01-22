import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <Provider store={store}>
      <h2>Learning Redux Toolkit</h2>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
