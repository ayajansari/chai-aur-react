import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setCount] = useState("black");

  return (
    <>
      {" "}
      {/* <></> this is called react fragment */}
      <div className="  w-full h-screen" style={{ backgroundColor: color }}>
        <div className="flex flex-row justify-center gap-3 absolute inset-x-0 bottom-12">
          <div
            onClick={() => setCount("red")}
            className="bg-red-500 text-black  p-4 rounded-xl "
          >
            Red
          </div>
          <div
            onClick={() => setCount("green")}
            className="bg-green-500 text-black  p-4 rounded-xl"
          >
            Green
          </div>
          <div
            onClick={() => setCount("pink")}
            className="bg-pink-500 text-black p-4 rounded-xl"
          >
            Pink
          </div>

          <div
            onClick={() => setCount("yellow")}
            className="bg-yellow-500 text-black  p-4 rounded-xl"
          >
            Yellow
          </div>
          <div
            onClick={() => setCount("blue")}
            className="bg-blue-500 text-black  p-4 rounded-xl"
          >
            Blue
          </div>

          {/* onClick takes function as value  so if we pass setCount("red") that means
          we are passing returned value of function to onClick which is not wright 
           onClick={setCount} this is wright here setCount is function but onClick={setCount()} this is wrong
           so if we want to pass function with args. then pass as arrow function just like above  */}
        </div>
      </div>
    </>
  );
}

export default App;
