import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet />
      {/* insted of outlet content of child routes will be displayed according to paths like  /contact etc. */}
      {/* An <Outlet> should be used in parent route elements to render
       their child route elements. This allows nested UI to show up when child
        routes are rendered. If the parent route matched exactly, it will render
         a child index route or nothing if there is no index route. */}

      {/* outlet allows  to render only child routes if you want to render child of childs then use outlet in childs also just like /about/underAbout route in main.jsx*/}
      <Footer />
    </>
  );
}

export default App;
