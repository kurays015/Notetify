import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import useTodoContext from "@/app/hooks/useTodoContext";

export default function EditTodoForm({ setOpen, id }) {
  const {
    title,
    setTitle,
    description,
    setDescription,
    editTodo,
    editTodoLoading,
    editTodoError,
  } = useTodoContext();

  async function handleEditTodo(e) {
    e.preventDefault();
    try {
      if (title === "" || description === "") {
        return;
      }
      await editTodo({
        id,
        title,
        description,
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleEditTodo}>
      <div className="grid gap-4 py-4">
        <Label>Title:</Label>
        <Input
          placeholder="Your new todo title"
          type="text"
          id="title"
          disabled={editTodoLoading}
          value={title}
          onChange={e => setTitle(e.target.value)}
          maxlength="20"
        />
        <Label>Description:</Label>
        <Textarea
          placeholder="Describe your new todo..."
          id="description"
          disabled={editTodoLoading}
          value={description}
          onChange={e => setDescription(e.target.value)}
          maxlength="100"
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
