import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditTodoForm from "./EditTodoForm";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import useTodoContext from "@/app/hooks/useTodoContext";

export function EditTodoModal({ id, index }) {
  const [open, setOpen] = useState(false);
  const { setTitle, setDescription, todos } = useTodoContext();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="none"
          onClick={() => {
            setTitle(todos[index].title);
            setDescription(todos[index].description);
          }}
        >
          <CiEdit className="cursor-pointer " />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Update todo</DialogTitle>
        </DialogHeader>
        <EditTodoForm setOpen={setOpen} id={id} />
      </DialogContent>
    </Dialog>
  );
}
