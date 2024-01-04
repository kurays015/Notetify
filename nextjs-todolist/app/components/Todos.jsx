"use client";
import useGetTodos from "../hooks/useGetTodos";
import TodoItem from "./TodoItem";
import useCrudContext from "../hooks/useCrudContext";
import { useEffect } from "react";
import Image from "next/image";
import img from "../../public/todoimg.jpg";
import ChakraSpinner from "../ui/ChakraSpinner";

export default function Todos() {
  const { data: todos, isLoading, isError } = useGetTodos();
  const { inProgress, completed, todosData, setTodosData } = useCrudContext();

  useEffect(() => {
    if (todos) {
      setTodosData([...todos]);
    }
  }, [todos]);

  if (isLoading) return <ChakraSpinner />;
  if (isError)
    return (
      <h1 className="my-12 font-semibold text-center text-xl">
        You must be logged in...
      </h1>
    );

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-10 text-white text-2xl mt-5">
      <div className="w-full max-h-[500px] h-[500px]  bg-red-400 rounded-lg overflow-hidden overflow-y-auto border-gray-300 border shadow-lg">
        <h1 className="text-center p-3 bg-blue-300 custom-sm:text-base sticky top-0 z-10 ">
          Current Todos
        </h1>
        <div className="p-2 flex flex-col gap-3">
          {todosData?.length ? (
            todosData?.map(todo => <TodoItem {...todo} key={todo._id} />)
          ) : (
            <Image src={img} qualtiy={100} alt="Empty todo-list" priority />
          )}
        </div>
      </div>
      <div className="w-full max-h-[500px] h-[500px] bg-blue-400 rounded-lg overflow-hidden overflow-y-auto  border-gray-300 border shadow-lg">
        <h1 className="text-center p-3 bg-blue-300 custom-sm:text-base  sticky top-0">
          In Progress
        </h1>
        <div className="p-2 flex flex-col gap-3">
          {inProgress.length ? (
            inProgress.map(todo => <TodoItem {...todo} key={todo._id} />)
          ) : (
            <Image src={img} qualtiy={100} alt="Empty todo-list" priority />
          )}
        </div>
      </div>
      <div className="w-full max-h-[500px] h-[500px] bg-green-400 rounded-lg overflow-hidden overflow-y-auto border-gray-300 border shadow-lg">
        <h1 className="text-center p-3 bg-blue-300 custom-sm:text-base  sticky top-0">
          Completed
        </h1>
        <div className="p-2 flex flex-col gap-3">
          {completed.length ? (
            completed.map(todo => <TodoItem {...todo} key={todo._id} />)
          ) : (
            <Image src={img} qualtiy={100} alt="Empty todo-list" priority />
          )}
        </div>
      </div>
    </div>
  );
}
