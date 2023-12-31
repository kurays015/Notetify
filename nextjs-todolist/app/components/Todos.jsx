"use client";
import useGetTodos from "../hooks/useGetTodos";
import TodoItem from "./TodoItem";
import useCrudContext from "../hooks/useCrudContext";

export default function Todos() {
  const { data: todos, isLoading, isError, error } = useGetTodos();
  const { inProgress, completed } = useCrudContext();

  if (isLoading) return <h1 className="">Todos Loading...</h1>;
  if (isError)
    return <h1 className="">{error.message}, You must be logged in...</h1>;

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-10 text-white text-2xl mt-5">
      <div className="w-full max-h-[500px]  bg-red-400 rounded-lg overflow-hidden overflow-y-auto">
        <h1 className="text-center p-3 bg-blue-300 custom-sm:text-base sticky top-0 z-10">
          Current Todos
        </h1>
        <div className="p-4">
          {todos?.length ? (
            todos?.map(todo => <TodoItem {...todo} key={todo._id} />)
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
            <TodoItem {...todo} key={todo._id} />
          ))}
        </div>
      </div>
      <div className="w-full max-h-[500px] bg-green-400 rounded-lg overflow-hidden overflow-y-auto">
        <h1 className="text-center p-3 bg-blue-300 custom-sm:text-base  sticky top-0">
          Completed
        </h1>
        <div className="p-4">
          {completed.map(todo => (
            <TodoItem {...todo} key={todo._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
