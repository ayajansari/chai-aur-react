import React, { useContext } from "react";

//here we have created context and provider in same file
export const ThemeContext = React.createContext(
  {
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
  }
  //these are default values of our context
);

export const ThemeProvider = ThemeContext.Provider;
