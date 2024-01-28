"use client";
import { createContext, useEffect, useRef, useState } from "react";
import useEditTodo from "../hooks/useEditTodo";
import useAddTodo from "../hooks/useAddTodo";
import useDeleteTodos from "../hooks/useDeleteTodos";
import useGetTodos from "../hooks/useGetTodos";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";

export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const formRef = useRef(null);
  const [inProgress, setInProgress] = useLocalStorage("inProgress", []);
  const [completed, setCompleted] = useLocalStorage("completed", []);

  const router = useRouter();
  const {
    data: todos,
    isLoading: todosLoading,
    isError: todoError,
  } = useGetTodos();

  const [currentTodos, setCurrentTodos] = useState([]);

  useEffect(() => {
    if (todos) {
      setCurrentTodos([...todos]);
    }
    if (todoError) {
      Cookies.remove("user");
      router.push("/");
    }
  }, [todos, todoError]);

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

  const { mutateAsync: deleteTodo, isPending: deleteLoading } =
    useDeleteTodos();

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
    deleteLoading,
    todos,
    todosLoading,
    todoError,
    inProgress,
    setInProgress,
    currentTodos,
    setCurrentTodos,
    completed,
    setCompleted,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
