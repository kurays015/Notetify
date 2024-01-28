import useTodoContext from "@/app/hooks/useTodoContext";
import { DropdownMenuCheckboxItem } from "./ui/dropdown-menu";

export default function ChangeStatus({ status, title, description, id }) {
  const {
    inProgress,
    setInProgress,
    currentTodos,
    setCurrentTodos,
    completed,
    setCompleted,
  } = useTodoContext();
  return (
    <div>
      {status.map(({ name, checked, onCheckedChange }) => (
        <DropdownMenuCheckboxItem
          key={name}
          // // checked={checked}
          // onCheckedChange={onCheckedChange}
          // onClick={if i click this, the title and description will pass to another card/container and filter the previouse card/container}
          onClick={() => {
            if (
              name === "In Progress" &&
              !inProgress.some(todo => todo._id === id)
            ) {
              setInProgress([...inProgress, { _id: id, title, description }]);
              setCurrentTodos(prevCopy =>
                prevCopy.filter(todo => todo._id !== id)
              );
              setCompleted(prevCopy =>
                prevCopy.filter(todo => todo._id !== id)
              );
            } else if (
              name === "Completed" &&
              !completed.some(todo => todo._id === id)
            ) {
              setCompleted([...completed, { _id: id, title, description }]);
              setCurrentTodos(prevCopy =>
                prevCopy.filter(todo => todo._id !== id)
              );
              setInProgress(prevCopy =>
                prevCopy.filter(todo => todo._id !== id)
              );
            } else if (
              name === "Current Todos" &&
              !currentTodos.some(todo => todo._id === id)
            ) {
              setInProgress(prevCopy =>
                prevCopy.filter(todo => todo._id !== id)
              );
              setCurrentTodos([
                ...currentTodos,
                { _id: id, title, description },
              ]);
              setCompleted(prevCopy =>
                prevCopy.filter(todo => todo._id !== id)
              );
            }
          }}
        >
          {name}
        </DropdownMenuCheckboxItem>
      ))}
    </div>
  );
}
