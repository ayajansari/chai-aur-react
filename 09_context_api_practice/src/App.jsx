import { useState } from "react";

import "./App.css";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import MyContextProvider from "./context/MyContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MyContextProvider>
      <div style={{ display: "flex" }}>
        <Comp1 />
        <Comp2 />
      </div>
    </MyContextProvider>
  );
}

export default App;
