"use client";

import { createContext, useReducer, useState } from "react";

export const CrudContext = createContext();

// function reducer(state, action) {
//   switch(action.type) {
//     case "CREATE":
//       return //
//     case "UPDATE":
//       return
//     case "DELETE":
//       return
//     case "CHANGE_STATUS":
//       return
//     default:
//     return state
//   }
// }

export default function CrudContextProvider({ children }) {
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  function handleInProgress(todo, _id) {
    setInProgress([...inProgress, { todo, _id }]);
  }
  function handleCompleted(todo, _id) {
    setCompleted([...completed, { todo, _id }]);
  }

  const value = {
    inProgress,
    setInProgress,
    completed,
    setCompleted,
    handleCompleted,
    handleInProgress,
  };
  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
}
