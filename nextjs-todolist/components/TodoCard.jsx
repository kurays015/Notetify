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
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        What&apos;s your todo?
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {todos?.map(todo => (
          <TodoItem {...todo} key={todo._id} />
        ))}
      </div>
    </div>
  );
}
