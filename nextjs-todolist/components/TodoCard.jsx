"use client";
import { useGetTodos } from "@/app/hooks/useGetTodos";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import TodoItem from "./TodoItem";

export default function Todos() {
  const user = Cookies.get("user");
  const router = useRouter();
  const {
    data: todos,
    isLoading: todosLoading,
    isError: todoError,
  } = useGetTodos();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  if (todoError) return <div>Login first!</div>;
  if (todosLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h2>Title</h2>
      {todos?.map(todo => (
        <TodoItem {...todo} key={todo._id} />
      ))}
    </div>
  );
}
