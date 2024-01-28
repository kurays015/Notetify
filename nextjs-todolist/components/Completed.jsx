"use client";
import TodoItem from "./TodoItem";
import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import useTodoContext from "@/app/hooks/useTodoContext";

export default function Completed() {
  const { completed } = useTodoContext();
  return (
    <Card className="overflow-y-auto w-[500px]">
      <CardHeader>
        <CardTitle className="font-semibold text-gray-800 dark:text-white customSm:text-xl lg:text-2xl">
          Completed
        </CardTitle>
      </CardHeader>
      {completed?.map((todo, index) => (
        <TodoItem {...todo} key={todo._id} index={index} />
      ))}
    </Card>
  );
}
