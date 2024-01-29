"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddTodoForm from "./AddTodoForm";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import useTodoContext from "@/app/hooks/useTodoContext";

export function AddTodoModal() {
  const [open, setOpen] = useState(false);
  const { setTitle, setDescription } = useTodoContext();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span>
          <CiCirclePlus
            className="customSm:text-7xl fixed bottom-2 right-2 text-blue-400 cursor-pointer lg:text-[120px] lg:bottom-16 lg:right-14 hover:transition-all hover:-translate-y-6 duration-500 ease-in-out"
            onClick={() => {
              setTitle("");
              setDescription("");
            }}
          />
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            What&apos;s on your mind?
          </DialogTitle>
        </DialogHeader>
        <AddTodoForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
