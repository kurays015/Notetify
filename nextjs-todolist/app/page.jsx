import { CardWithForm } from "@/components/CardWithForm";
import { DialogDemo } from "@/components/DialogDemo";
import { ThemeToggle } from "@/components/ui/modetoggle";
import axios from "axios";

async function getTodos() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/todos`,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  // https://notetify-server.onrender.com/todos - NEED TO BRING THIS BACK ON DEPLOYMENT!

  const todos = await getTodos();

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
