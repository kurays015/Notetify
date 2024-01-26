import { AddTodoModal } from "@/components/AddTodoModal";

export default function layout({ children }) {
  return (
    <div
      className=" mx-auto p-8 text-center customSm:p-2 
    md:p-6 lg:max-w-7xl"
    >
      <h1 className="font-bold text-blue-500 customSm:text-4xl mb-5">
        Notetify
      </h1>
      {children}
      <AddTodoModal />
    </div>
  );
}
