"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Todos() {
  // https://notetify-server.onrender.com/todos - NEED TO BRING THIS BACK ON DEPLOYMENT!

  const [todos, setTodos] = useState([]);
  async function getTodos() {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/todos`,
        {
          withCredentials: true,
        }
      );
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {todos && todos.map(todo => <div key={todo._id}>{todo.todo}</div>)}
    </div>
  );
}
