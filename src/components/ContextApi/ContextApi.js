import React, { createContext, useState } from "react";

export const ContextApi = createContext();

export const ContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ContextApi.Provider value={{ darkMode , setDarkMode }}>
      {props.children}
    </ContextApi.Provider>
  );
};
