import { useState } from "react";
//above is hook
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15); //15 is default value of our counter and useState() gives
  //output in two params, one is updated value in counter and one is function stored in setCounter which updates the value everywhere

  const add = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log(counter);
    }
  };
  const remove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log(counter);
    }
  };
  //important interview question
  // const increment = () => {
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   //here we will not get 19 but 16 because of asynchronous operation of js and
  //   //in fibre the operations  are performed in batches instead of one-by-one
  // };
  return (
    <>
      <h3>Count is : {counter}</h3>

      <button onClick={add}>Add Value {counter}</button>
      <button onClick={remove}>Remove Value {counter}</button>

      {/* after clicking on buttons value of count is updates but in h3,buttons it is not showing real time data
          this is  where hooks of react comes in consideration ,because react is basically reacts
          when any change in variables done or any small change occurs*/}

      {/* <button onClick={increment}>Add Value {counter}</button> */}
    </>
  );
}

export default App;
