import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] =useState("dark");

    function changeTheme(){
        setTheme((prevTheme) =>(prevTheme === "dark" ? "light" : "dark"));
  }
  return(
    <ThemeContext.Provider value={{theme, changeTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
