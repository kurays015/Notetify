import useTodoContext from "@/app/hooks/useTodoContext";
import { DropdownMenuCheckboxItem } from "./ui/dropdown-menu";
import { TbArrowsExchange } from "react-icons/tb";
import React from "react";

export default function ChangeStatus({ statuses, id, status }) {
  const { updateStatus, updateStatusLoading, updateStatusError, todos } =
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
      {statuses.map(({ name }) => (
        <React.Fragment key={name}>
          {status !== name && (
            <DropdownMenuCheckboxItem
              className="gap-3"
              onClick={() => updateTodosStatus(name)}
            >
              <TbArrowsExchange />
              {name}
            </DropdownMenuCheckboxItem>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
