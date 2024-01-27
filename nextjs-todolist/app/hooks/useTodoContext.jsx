"use client";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function useTodoContext() {
  return useContext(TodoContext);
}
