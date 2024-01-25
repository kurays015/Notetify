"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import useAddTodo from "@/app/hooks/useAddTodo";
import { useRef } from "react";

export default function AddTodoForm({ setOpen }) {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const {
    mutateAsync: addTodo,
    isPending: addTodoLoading,
    error: addTodoError,
  } = useAddTodo();

  async function handleAddTodo(e) {
    e.preventDefault();
    if (titleRef.current.value === "" || !descriptionRef.current.value === "")
      return;
    await addTodo({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    });
    setOpen(false);
  }

  return (
    <form onSubmit={handleAddTodo}>
      <div className="grid gap-4 py-4">
        <Label>Title:</Label>
        <Input
          placeholder="Your todo title"
          type="text"
          id="title"
          ref={titleRef}
          disabled={addTodoLoading}
        />
        <Label>Description:</Label>
        <Textarea
          placeholder="Describe your todo..."
          id="description"
          ref={descriptionRef}
          disabled={addTodoLoading}
        />
      </div>

      <DialogFooter>
        <Button type="submit" disabled={addTodoLoading}>
          {addTodoLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {addTodoLoading ? "Adding..." : "Add"}
        </Button>
      </DialogFooter>
      <p className="text-red-400 text-center mt-4">
        {addTodoError && addTodoError.response?.data?.error}
      </p>
    </form>
  );
}
