import useTodoContext from "@/app/hooks/useTodoContext";
import { DropdownMenuCheckboxItem } from "./ui/dropdown-menu";

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
      {status.map(({ name, checked, onCheckedChange }, index) => (
        <DropdownMenuCheckboxItem
          key={name}
          // // checked={checked}
          // onCheckedChange={onCheckedChange}
          onClick={() => updateTodosStatus(name)}
        >
          {name}
        </DropdownMenuCheckboxItem>
      ))}
    </div>
  );
}
