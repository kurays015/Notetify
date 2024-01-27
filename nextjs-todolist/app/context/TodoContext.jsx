"use client";
import { createContext, useRef, useState } from "react";
import useEditTodo from "../hooks/useEditTodo";
import useAddTodo from "../hooks/useAddTodo";
import useDeleteTodos from "../hooks/useDeleteTodos";
import useGetTodos from "../hooks/useGetTodos";

export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const formRef = useRef(null);

  const {
    data: todos,
    isLoading: todosLoading,
    isError: todoError,
  } = useGetTodos();

  const {
    mutateAsync: addTodo,
    isPending: addTodoLoading,
    error: addTodoError,
  } = useAddTodo();

  const {
    mutateAsync: editTodo,
    isPending: editTodoLoading,
    error: editTodoError,
  } = useEditTodo();

  const {
    mutateAsync: deleteTodo,
    error: deleteError,
    isError: deleteIsError,
    isPending: deleteLoading,
  } = useDeleteTodos();

  const value = {
    title,
    setTitle,
    description,
    setDescription,
    formRef,
    editTodo,
    editTodoLoading,
    editTodoError,
    addTodo,
    addTodoLoading,
    addTodoError,
    deleteTodo,
    deleteError,
    deleteIsError,
    deleteLoading,
    todos,
    todosLoading,
    todoError,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
