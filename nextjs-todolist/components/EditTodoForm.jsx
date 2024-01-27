"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import useTodoContext from "@/app/hooks/useTodoContext";
import { useState } from "react";

export default function EditTodoForm({ setOpen, id }) {
  const {
    titleRef,
    descriptionRef,
    editTodo,
    editTodoLoading,
    editTodoError,
    // todos,
  } = useTodoContext();

  async function handleEditTodo(e) {
    e.preventDefault();
    if (titleRef.current.value === "" || descriptionRef.current.value === "") {
      return;
    }

    await editTodo(
      {
        id,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      },
      id
    );
    setOpen(false);
  }

  return (
    <form onSubmit={handleEditTodo}>
      <div className="grid gap-4 py-4">
        <Label>Title:</Label>
        <Input
          placeholder="Your new todo title"
          type="text"
          id="title"
          ref={titleRef}
          disabled={editTodoLoading}
          onChange={e => setTitle(e.target.value)}
        />
        <Label>Description:</Label>
        <Textarea
          placeholder="Describe your new todo..."
          id="description"
          ref={descriptionRef}
          disabled={editTodoLoading}
        />
      </div>

      <DialogFooter>
        <Button type="submit" disabled={editTodoLoading}>
          {editTodoLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {editTodoLoading ? "Updating..." : "Update"}
        </Button>
      </DialogFooter>
      <p className="text-red-400 text-center mt-4">
        {editTodoError && editTodoError.response?.data?.error}
      </p>
    </form>
  );
}
