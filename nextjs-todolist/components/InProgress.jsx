"use client";
import TodoItem from "./TodoItem";
import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import useTodoContext from "@/app/hooks/useTodoContext";

export default function InProgress() {
  const { todos } = useTodoContext();
  return (
    <Card className="card customSm:w-full customSm:max-h-[600px] overflow-y-auto">
      <CardHeader>
        <CardTitle className="font-semibold text-gray-800 dark:text-white customSm:text-xl lg:text-2xl">
          In Progress
        </CardTitle>
      </CardHeader>
      {todos?.map((todo, index) => (
        <React.Fragment key={todo._id}>
          {todo.status === "In Progress" && (
            <TodoItem {...todo} index={index} />
          )}
        </React.Fragment>
      ))}
    </Card>
  );
}
