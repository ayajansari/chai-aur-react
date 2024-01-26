import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import conf from "./conf/conf";

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL); //our project is build through vite that's
  //why above syntax , syntaxt will be different for bundlers
  //or we can create conf.js specify all variables there

  

  return (
    <>
      <h1>blog app with appwrite</h1>
    </>
  );
}

export default App;
