"use client";
import * as React from "react";
import { BiDotsVertical } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useDeleteTodos from "@/app/hooks/useDeleteTodos";
import { Loader2 } from "lucide-react";
import { EditTodoModal } from "./EditTodoModal";

export function ShowMore({ id }) {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);
  const status = [
    {
      name: "Current Todos",
      checked: showStatusBar,
      onCheckedChange: setShowStatusBar,
    },
    {
      name: "In Progress",
      checked: showActivityBar,
      onCheckedChange: setShowActivityBar,
    },
    {
      name: "Completed",
      checked: showPanel,
      onCheckedChange: setShowPanel,
    },
  ];

  const {
    mutateAsync: deleteTodo,
    error: deleteError,
    isError: deleteIsError,
    isPending: deleteLoading,
  } = useDeleteTodos();

  async function handleDelete() {
    await deleteTodo({ id });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="none" className="p-0 ml-2">
          <BiDotsVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel className="text-center">
          Change Status
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex items-center justify-center gap-5">
          <span>
            <EditTodoModal id={id} />
          </span>
          <span>
            {deleteLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <MdDeleteOutline
                className="cursor-pointer"
                onClick={handleDelete}
              />
            )}
          </span>
        </div>
        {status.map(({ name, checked, onCheckedChange }) => (
          <DropdownMenuCheckboxItem
            key={name}
            checked={checked}
            onCheckedChange={onCheckedChange}
            // onClick={if i click this, the title and description will pass to another card/container and filter the previouse card/container}
          >
            {name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
