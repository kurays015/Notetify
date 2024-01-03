"use client";

import { createContext, useReducer, useRef, useState } from "react";
import useDeleteTodos from "../hooks/useDeleteTodos";
import useUpdateTodos from "../hooks/useUpdateTodos";
import useAddTodos from "../hooks/useAddTodos";

export const CrudContext = createContext();

export default function CrudContextProvider({ children }) {
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [todosData, setTodosData] = useState([]);
  const [error, setError] = useState("");

  //chakra ui modal state
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  //add todo states
  const todoRef = useRef();
  const descriptionRef = useRef();

  //update todo states
  const [update, setUpdate] = useState({});
  const updateTodoRef = useRef();
  const updateDesRef = useRef();

  //---------------- add todo---------------------------

  const { mutateAsync: submitTodo, isPending: addTodoLoading } = useAddTodos();

  //add todo/task function
  async function handleSave() {
    if (todoRef.current.value === "" || descriptionRef.current.value === "") {
      setError("All fields are required");
      return;
    }
    await submitTodo({
      todo: todoRef.current.value,
      description: descriptionRef.current.value,
    });
    setIsOpen(false);
  }

  //---------------- add todo---------------------------

  //---------------- update todo---------------------------

  const { mutateAsync: updateTodo, isPending: updateTodoLoading } =
    useUpdateTodos();

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
  //---------------- update todo---------------------------

  //---------------- delete todo---------------------------

  const { mutateAsync: deleteTodo, isPending: deleteLoading } =
    useDeleteTodos();

  async function handleDeleteTodos(id) {
    await deleteTodo(id);
  }

  //---------------- delete todo---------------------------

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
    deleteTodo,
    deleteLoading,
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
    handleOpenUpdateModal,
    handleSave,
    todoRef,
    descriptionRef,
    addTodoLoading,
  };
  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
}
