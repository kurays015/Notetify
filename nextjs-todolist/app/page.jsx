import { AddTodoModal } from "@/components/AddTodoModal";
import { LoginModal } from "@/components/LoginModal";
import Todos from "@/components/Todos";
import Welcome from "@/components/Welcome";
import { cookies } from "next/headers";

export default function Home() {
  // https://notetify-server.onrender.com/todos - NEED TO BRING THIS BACK ON DEPLOYMENT!
  const cookieStore = cookies().get("accessToken");

  return (
    <main className="max-w-7xl mx-auto p-8 text-center">
      {cookieStore && (
        <h1 className="font-bold text-blue-500 customSm:text-4xl mb-5">
          Notetify
        </h1>
      )}
      {!cookieStore && <Welcome />}
      {!cookieStore && <LoginModal />}
      <Todos />
      <AddTodoModal />
    </main>
  );
}
