import useTodoContext from "@/app/hooks/useTodoContext";
import { DropdownMenuCheckboxItem } from "./ui/dropdown-menu";
import { TbArrowsExchange } from "react-icons/tb";

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
          className="gap-3"
          key={name}
          onClick={() => updateTodosStatus(name)}
        >
          <TbArrowsExchange />
          {name}
        </DropdownMenuCheckboxItem>
      ))}
    </div>
  );
}
