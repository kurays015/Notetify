import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import useTodoContext from "@/app/hooks/useTodoContext";

export default function AddTodoForm({ setOpen }) {
  const {
    title,
    setTitle,
    description,
    setDescription,
    addTodo,
    addTodoLoading,
    addTodoError,
  } = useTodoContext();

  async function handleAddTodo(e) {
    try {
      e.preventDefault();
      if (title === "" || description === "") return;
      await addTodo({
        title,
        description,
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleAddTodo}>
      <div className="grid gap-4 py-4">
        <Label>Title:</Label>
        <Input
          placeholder="Your todo title"
          type="text"
          id="title"
          disabled={addTodoLoading}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Label>Description:</Label>
        <Textarea
          placeholder="Describe your todo..."
          id="description"
          disabled={addTodoLoading}
          value={description}
          onChange={e => setDescription(e.target.value)}
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
