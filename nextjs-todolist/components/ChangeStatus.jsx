import useTodoContext from "@/app/hooks/useTodoContext";
import { DropdownMenuCheckboxItem } from "./ui/dropdown-menu";
import { Loader2 } from "lucide-react";

export default function ChangeStatus({ status, id }) {
  const { updateStatus, updateStatusLoading, updateStatusError } =
    useTodoContext();

  async function updateTodosStatus(name) {
    try {
      await updateStatus({ id, status: name });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {status.map(({ name, checked, onCheckedChange }) => (
        <DropdownMenuCheckboxItem
          key={name}
          // // checked={checked}
          // onCheckedChange={onCheckedChange}
          onClick={() => updateTodosStatus(name)}
        >
          {updateStatusLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            name
          )}
        </DropdownMenuCheckboxItem>
      ))}
    </div>
  );
}
