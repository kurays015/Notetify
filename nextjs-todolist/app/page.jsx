import { CardWithForm } from "@/components/CardWithForm";
import { DialogDemo } from "@/components/DialogDemo";
import Todos from "@/components/Todos";
import { ThemeToggle } from "@/components/ui/modetoggle";

export default function Home() {
  // https://notetify-server.onrender.com/todos - NEED TO BRING THIS BACK ON DEPLOYMENT!

  return (
    <main>
      <div className="text-end p-2">
        <ThemeToggle />
      </div>
      <CardWithForm />
      <DialogDemo />
      <Todos />
    </main>
  );
}
