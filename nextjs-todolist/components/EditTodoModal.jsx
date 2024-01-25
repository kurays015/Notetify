"use client";
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

export function EditTodoModal({ id }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="none">
            <CiEdit className="cursor-pointer" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Update todo</DialogTitle>
          </DialogHeader>
          <EditTodoForm setOpen={setOpen} id={id} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
