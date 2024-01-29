import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import Todos from "./Todos";

function AddTodo() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);    //state.todos ->todos is name of our slice

  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();

    //useDispatch used reducers to make changes in store
    if (!input) return;
    dispatch(addTodo(input));
    // console.log(todos);
    setInput("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
      <ul className="list-none w-full">
        {todos.map((todo) => (
          //   console.log(todo.text)
          //   <div key={todo.id}>
          <Todos todo={todo} key={todo.id} />
          //   </div>
        ))}
      </ul>
    </>
  );
}

export default AddTodo;
