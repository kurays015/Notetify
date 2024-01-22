import { CardWithForm } from "@/components/CardWithForm";
import { DialogDemo } from "@/components/DialogDemo";
import { ThemeToggle } from "@/components/ui/modetoggle";

export default async function Home() {
  return (
    <main>
      <div className="text-end p-2">
        <ThemeToggle />
      </div>
      <CardWithForm />
      <DialogDemo />
    </main>
  );
}
