"use client";
import TodoItem from "./TodoItem";
import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import useTodoContext from "@/app/hooks/useTodoContext";

export default function InProgress() {
  const { inProgress } = useTodoContext();
  console.log(inProgress);
  return (
    <Card className="overflow-y-auto w-[500px]">
      <CardHeader>
        <CardTitle className="font-semibold text-gray-800 dark:text-white customSm:text-xl lg:text-2xl">
          In Progress
        </CardTitle>
      </CardHeader>
      {inProgress?.map((todo, index) => (
        <TodoItem {...todo} key={todo._id} index={index} />
      ))}
    </Card>
  );
}
