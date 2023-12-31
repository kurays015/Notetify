"use client";
import { useState } from "react";
import useGetTodos from "../hooks/useGetTodos";
import TodoItem from "./TodoItem";

export default function Todos() {
  const { data: todos, isLoading, isError, error } = useGetTodos();
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  if (isLoading) return <h1 className="">Todos Loading...</h1>;
  if (isError)
    return <h1 className="">{error.message}, You must be logged in...</h1>;

  function handleInProgress(todo, id) {
    setInProgress([...inProgress, { todo, id }]);
  }
  function handleCompleted(todo, id) {
    setCompleted([...completed, { todo, id }]);
  }

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-10 text-white text-2xl mt-5">
      <div className="w-full max-h-[500px]  bg-red-400 rounded-lg overflow-hidden overflow-y-auto">
        <h1 className="text-center p-3 bg-blue-300 custom-sm:text-base sticky top-0 z-10">
          Current Todos
        </h1>
        <div className="p-4">
          {todos?.length ? (
            todos?.map(todo => (
              <TodoItem
                {...todo}
                key={todo._id}
                handleInProgress={handleInProgress}
                handleCompleted={handleCompleted}
              />
            ))
          ) : (
            <p className="text-center italic">no todos...</p>
          )}
        </div>
      </div>
      <div className="w-full max-h-[500px] bg-blue-400 rounded-lg overflow-hidden overflow-y-auto ">
        <h1 className="text-center p-3 bg-blue-300 custom-sm:text-base  sticky top-0">
          In Progress
        </h1>
        <div className="p-4">
          {inProgress.map(todo => (
            <div key={todo.id}>
              <h1>{todo.todo}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-h-[500px] bg-green-400 rounded-lg overflow-hidden overflow-y-auto">
        <h1 className="text-center p-3 bg-blue-300 custom-sm:text-base  sticky top-0">
          Completed
        </h1>
        <div className="p-4">
          {completed.map(todo => (
            <div key={todo.id}>
              <h1>{todo.todo}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//  {todos?.map(todo => (
//       <TodoItem {...todo} key={todo.id} />
//     ))}
