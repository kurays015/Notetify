"use client";
import { Button } from "@/components/ui/button";
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

export function AddTodoModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="none">
          <CiCirclePlus className="customSm:text-7xl fixed bottom-2 right-2 text-blue-400" />
        </Button>
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
