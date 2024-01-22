import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggle, updateTodo } from "../features/todo/todoSlice";

function Todos({ todo }) {
  //   console.log(todo);
  //   console.log("id:" + todo.text);
  if (!todo) {
    return null; // or handle the case where 'todo' is undefined
  }

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  //   const todos = useSelector((state) => state.todos);
  const [message, setMessage] = useState(todo.text);
  const dispatch = useDispatch();

  function editTodo(id, msg) {
    const newTodo = { id, text: msg, completed: false };
    dispatch(updateTodo({ id, newTodo }));
    setIsTodoEditable((prev) => !prev);
  }

  return (
    <li
      className={`w-full mt-4 flex justify-around items-center px-4 py-3  rounded text-lg 
        ${todo.completed ? "bg-zinc-400" : " bg-zinc-800"}`}
    >
      {/* {console.log(todo.completed)} */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggle(todo.id))}
      />
      <div className="flex justify-between text-white items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={` w-full bg-transparent rounded-lg p-1  mr-2 ${
            isTodoEditable ? "border outline-2" : ""
          }`}
          readOnly={!isTodoEditable}
        />
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border
           border-black/10 justify-center items-center bg-gray-50
            hover:bg-gray-100 shrink-0 disabled:opacity-50 "
          onClick={(e) => {
            if (todo.completed) return;

            if (isTodoEditable) {
              editTodo(todo.id, message); //save functionality
            } else {
              setIsTodoEditable((prev) => !prev); //edit functionality
            }
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
      </div>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className=" ml-2 text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </li>
  );
}

export default Todos;
