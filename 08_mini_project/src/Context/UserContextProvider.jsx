import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); //data and functions of userContext
  //globally accessible for all components , we can simply use these by  ` const {user} or {setUser } =useContext(userContext) `

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* provides some data (here user and setUser) to below specified components 
      now we can use user and setUser in all below specified components using ` const {user} or {setUser } =useContext(userContext) `*/}
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
