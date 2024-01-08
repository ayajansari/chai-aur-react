import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/ContactUs/Contact.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  //way 1 router
  // createRoutesFromElements(
  //   <Route path="/" element={<App />}>
  //     <Route path="" element={<Home />} />
  //     <Route path="about" element={<About />} />
  //

  //     <Route path="contact" element={<Contact />} />
  //     <Route path="user/:userid" element={<User />} />
  //     <Route path="github" element={<Github />} />
  //   </Route>
  // )

  //way 2 router
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },

        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "user/:userid",
          element: <User />,
        },
        //first way of handling  api calls
        {
          path: "github",
          element: <Github />,
        },

        // second way of handling api calls
        // {
        //   loader: async () => {
        //     const res = await fetch(
        //       "https://api.github.com/users/hiteshchoudhary"
        //     );
        //     return res.json();
        //   }, //this function is called when cursor comes on Github link
        //   //definition of above function is declared in github.jsx
        //   path: "github",
        //   element: <Github />,
        // },
      ],
    },
  ]
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
