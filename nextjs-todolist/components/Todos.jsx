"use client";
import { useGetTodos } from "@/app/hooks/useGetTodos";

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
      {todos?.map(todo => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}
