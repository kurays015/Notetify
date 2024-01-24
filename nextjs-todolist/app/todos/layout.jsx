import { AddTodoModal } from "@/components/AddTodoModal";

export default function layout({ children }) {
  return (
    <main className="max-w-7xl mx-auto p-8 text-center">
      <h1 className="font-bold text-blue-500 customSm:text-4xl mb-5">
        Notetify
      </h1>
      {children}
      <AddTodoModal />
    </main>
  );
}
