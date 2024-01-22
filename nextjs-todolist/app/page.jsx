"use client";
import { CardWithForm } from "@/components/CardWithForm";
import { DialogDemo } from "@/components/DialogDemo";
import { ThemeToggle } from "@/components/ui/modetoggle";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  // https://notetify-server.onrender.com/todos
  useEffect(() => {
    async function getTodos() {
      const { data } = await axios.get(
        "https://notetify-server.onrender.com/todos",
        {
          withCredentials: true,
        }
      );
      setTodos(data);
    }
    getTodos();
  }, []);

  console.log(todos);

  return (
    <main>
      <div className="text-end p-2">
        <ThemeToggle />
      </div>
      <CardWithForm />
      <DialogDemo />
      <div>
        {todos.map(todo => (
          <div key={todo._id}>{todo.todo}</div>
        ))}
      </div>
    </main>
  );
}
