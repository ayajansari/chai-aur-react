import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* provides some data (here user and setUser) to below specified components 
      now we can use user and setUser in all below specified components*/}
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
