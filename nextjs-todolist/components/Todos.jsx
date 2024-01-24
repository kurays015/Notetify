"use client";
import { useGetTodos } from "@/app/hooks/useGetTodos";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Todos() {
  const user = Cookies.get("user");
  const router = useRouter();
  const {
    data: todos,
    isLoading: todosLoading,
    isError: todoError,
  } = useGetTodos();

  if (!user) router.push("/");
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
