import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

//we are learning context api->In React, the Context API is a feature that
//allows you to pass data through the component tree without having to pass props
//manually at every level. It helps in managing state at a global level and makes it
// accessible to any component in the tree without the need for prop drilling.

//ex if we have to use some props in child of child of child of parent components then context api
//allows us to make that prop  global  which we can use in every component instead of passing that prop
//in every component as prop just like <App user="ayaj" age=19 />
function App() {
  return (
    <UserContextProvider>
      <h1>Learning Context Api </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
