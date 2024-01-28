"use client";
import TodoItem from "./TodoItem";
import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import useTodoContext from "@/app/hooks/useTodoContext";

export default function Todos() {
  const { todosLoading, todoError, todos } = useTodoContext();

  const user = Cookies.get("user");
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  if (todoError) return <div>Login first!</div>;
  if (todosLoading) return <h1>Loading...</h1>;
  // customSm:w-full customSm:max-h-96 md:w-[60%]
  return (
    <Card className="overflow-y-auto w-[500px]">
      <CardHeader>
        <CardTitle className="font-semibold text-gray-800 dark:text-white customSm:text-xl lg:text-2xl">
          Current Todo&apos;s
        </CardTitle>
      </CardHeader>
      {todos?.map((todo, index) => (
        <React.Fragment key={todo._id}>
          {todo.status === "Current Todos" && (
            <TodoItem {...todo} index={index} />
          )}
        </React.Fragment>
      ))}
    </Card>
  );
}
