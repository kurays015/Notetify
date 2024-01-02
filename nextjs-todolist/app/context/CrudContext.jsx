"use client";

import { createContext, useReducer, useState } from "react";

export const CrudContext = createContext();

export default function CrudContextProvider({ children }) {
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [todosData, setTodosData] = useState([]);

  //need to refactor code below
  function handleInProgress(todo, _id) {
    if (!inProgress.some(todo => todo._id === _id)) {
      setInProgress([...inProgress, { todo, _id }]);
    }
    const updatedCurrentTodos = todosData.filter(item => item._id !== _id);
    setTodosData(updatedCurrentTodos);
    const updatedCompleted = completed.filter(item => item._id !== _id);
    setCompleted(updatedCompleted);
  }

  function handleCompleted(todo, _id) {
    if (!completed.some(todo => todo._id === _id)) {
      setCompleted([...completed, { todo, _id }]);
    }
    const updatedCurrentTodos = todosData.filter(item => item._id !== _id);
    setTodosData(updatedCurrentTodos);
    const updatedInProgress = inProgress.filter(todo => todo._id !== _id);
    setInProgress(updatedInProgress);
  }

  function handleCurrentTodos(todo, _id) {
    if (!todosData.some(todo => todo._id === _id)) {
      setTodosData([...todosData, { todo, _id }]);
    }
    const updatedInProgress = inProgress.filter(todo => todo._id !== _id);
    setInProgress(updatedInProgress);
    const updatedCompleted = completed.filter(item => item._id !== _id);
    setCompleted(updatedCompleted);
  }

  const value = {
    inProgress,
    setInProgress,
    completed,
    setCompleted,
    handleCompleted,
    handleInProgress,
    handleCurrentTodos,
    todosData,
    setTodosData,
  };
  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
}
