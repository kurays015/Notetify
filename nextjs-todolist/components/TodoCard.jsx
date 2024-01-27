"use client";
import TodoItem from "./TodoItem";
import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import useTodoContext from "@/app/hooks/useTodoContext";

export default function Todos() {
  const { todos, todosLoading, todoError } = useTodoContext();

  const user = Cookies.get("user");
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  if (todoError) return <div>Login first!</div>;
  if (todosLoading) return <h1>Loading...</h1>;

  return (
    <Card className="overflow-y-auto customSm:w-full customSm:max-h-96 md:w-[60%]">
      <CardHeader>
        <CardTitle className="font-semibold text-gray-800 dark:text-white customSm:text-xl lg:text-2xl">
          What&apos;s your Todo?
        </CardTitle>
      </CardHeader>
      {todos?.map(todo => (
        <TodoItem {...todo} key={todo._id} />
      ))}
    </Card>
  );
}
