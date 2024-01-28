"use client";
import TodoItem from "./TodoItem";
import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import useTodoContext from "@/app/hooks/useTodoContext";
import { Skeleton } from "./ui/skeleton";

export default function Completed() {
  const { todos, todosLoading } = useTodoContext();
  if (todosLoading) return <Skeleton className="h-[125px] w-full rounded-xl" />;
  return (
    <Card className="card customSm:w-full customSm:max-h-[600px] overflow-y-auto">
      <CardHeader>
        <CardTitle className="font-semibold text-gray-800 dark:text-white customSm:text-xl lg:text-2xl">
          Completed
        </CardTitle>
      </CardHeader>
      {todos?.map((todo, index) => (
        <React.Fragment key={todo._id}>
          {todo.status === "Completed" && <TodoItem {...todo} index={index} />}
        </React.Fragment>
      ))}
    </Card>
  );
}
