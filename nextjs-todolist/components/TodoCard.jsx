"use client";
import { useGetTodos } from "@/app/hooks/useGetTodos";
import TodoItem from "./TodoItem";

export default function Todos() {
  const {
    data: todos,
    isLoading: todosLoading,
    isError: todoError,
  } = useGetTodos();

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
