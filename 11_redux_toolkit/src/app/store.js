import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

//every applications has only one store called as single source of truth
//In Redux, you organize your application's state into a single JavaScript object called the "store." 
