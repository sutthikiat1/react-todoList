import React, { createContext, useState } from "react";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  let [todoLists, setTodoLists] = useState([]);

  return (
    <Context.Provider value={{ todoLists, setTodoLists }}>
      {children}
    </Context.Provider>
  );
};
