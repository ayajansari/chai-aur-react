import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "ayajansari",
    age: "21",
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind CSS</h1>

      {/* below is just a card  taken from tailwind.css */}
      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="pexels-pixabay-45851.jpg" alt="" width="384" height="512" />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}

      {/* using separate created card component and passing agruments as props to that card */}
      <Card username="John" btnText="Click Me" />
      <Card username="Roman" btnText="Visit Me" />
      {/* <Card  someObj={myObj} /> */}
    </>
  );
}

export default App;

// in <></> all tags should have closing tag in case of img tag use <img />
