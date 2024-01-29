"use client";
import TodoItem from "./TodoItem";
import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import useTodoContext from "@/app/hooks/useTodoContext";
import { Skeleton } from "./ui/skeleton";

export default function Todos() {
  const { todosLoading, todoError, todos } = useTodoContext();

  const user = Cookies.get("user");
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  // if (todoError) return "login";
  if (todosLoading) return <Skeleton className="h-[125px] w-full rounded-xl" />;

  return (
    <Card className="card customSm:w-full customSm:max-h-[600px] overflow-y-auto">
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
