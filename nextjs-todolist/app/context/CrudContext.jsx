"use client";

import { createContext, useReducer, useRef, useState } from "react";
import useDeleteTodos from "../hooks/useDeleteTodos";
import useUpdateTodos from "../hooks/useUpdateTodos";

export const CrudContext = createContext();

export default function CrudContextProvider({ children }) {
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [todosData, setTodosData] = useState([]);
  const [update, setUpdate] = useState({});

  //update todo
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const updateTodoRef = useRef();
  const updateDesRef = useRef();

  const {
    mutateAsync: deleteTodo,
    isPending: deleteLoading,
    error: deleteError,
  } = useDeleteTodos();

  const {
    mutateAsync: updateTodo,
    isPending: updateTodoLoading,
    error: updateTodoError,
  } = useUpdateTodos();

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

  async function handleDeleteTodos(id) {
    await deleteTodo(id);
  }

  async function handleUpdateTodos(_id) {
    if (
      updateTodoRef.current.value === "" ||
      updateDesRef.current.value === ""
    ) {
      setError("All fields are required");
      return;
    }
    await updateTodo({
      _id,
      todo: updateTodoRef.current.value,
      description: updateDesRef.current.value,
    });
    setIsOpen(false);
  }

  const handleOpenUpdateModal = _id => {
    onOpen();
    setUpdate(prev => ({ ...prev, [_id]: true }));
  };

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
    deleteTodo,
    deleteLoading,
    deleteError,
    handleDeleteTodos,
    isOpen,
    onClose,
    onOpen,
    update,
    setUpdate,
    updateTodoRef,
    updateDesRef,
    handleUpdateTodos,
    error,
    updateTodoLoading,
    updateTodoError,
    handleOpenUpdateModal,
  };
  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
}
