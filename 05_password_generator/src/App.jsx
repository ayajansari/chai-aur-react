import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerated = useCallback(() => {
    //here we can use  simple function without useCallback also
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-+=[]{}?~";

    for (let i = 1; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  //, [length, numberAllowed, charAllowed]); //[a,b,c,d] these are dependencies

  useEffect(() => {
    passwordGenerated();
  }, [length, numberAllowed, charAllowed]); //if  dependency is empty [] the effect will be executed
  // once after the initial render and if not empty then whenever any change occurs in dependencies this function is executed
  //we have not passed password as i/p in dependencies because useEffect is generating password every time
  //so if password is there in dependencies then infinite loop of useEffect occurs

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-lg  mx-auto shadow-md rounded-lg px-4 py-4  text-orange-500 bg-gray-700">
        <h1 className="text-4xl text-center">Password Generator</h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4 mt-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passwordRef} //input field is not reference and value of it can be used by passwordRef
            readOnly
          />
          <button
            className=" bg-blue-700 text-white px-3 py-0.5 shrink-0   active:bg-blue-900"
            onClick={copyToClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm  gap-x-2">
          <div className="flex items-center  gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkBox"
              defaultChecked={numberAllowed}
              name="numberInput"
              onChange={() => {
                setNumberAllowed((numberAllowed) => !numberAllowed);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkBox"
              defaultChecked={charAllowed}
              name="charInput"
              onChange={() => {
                setCharAllowed((charAllowed) => !charAllowed);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

//difference between with useCallback and without useCallback

//without useCallback
// The passwordGenerated function is created inside the component, and it will be recreated
// every time the component re-renders. This can lead to unnecessary re-renders of child components
// if this function is passed down as a prop.

//withCallback
// The passwordGenerated function is wrapped with useCallback and function definition is cached.
//if we provide an empty dependency array ([]), as it doesn't depend on
// any external(variable like length,numberAllowed,etc.) values. This helps in preventing unnecessary
// re-creation of the callback function on each render and initial valued will be used every time when needed
// ex. if we change length then still the length of passwordGenerated string is 8 because cached  function
// definition is used ,but if dependencies[] not empty  then values of dependencies are checked
//if any or all values changed then callback is recreated with updated values but if values state is same as previous
//then no recreation, use previous output of cached function
