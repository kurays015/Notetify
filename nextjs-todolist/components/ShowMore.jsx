import * as React from "react";
import { BiDotsVertical } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Loader2 } from "lucide-react";
import { EditTodoModal } from "./EditTodoModal";
import useTodoContext from "@/app/hooks/useTodoContext";
import ChangeStatus from "./ChangeStatus";

export function ShowMore({ id, index, status }) {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);
  const statuses = [
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
  const { deleteTodo, deleteLoading } = useTodoContext();

  async function handleDelete() {
    try {
      await deleteTodo({ id });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="none" className="p-0 ml-2">
          <BiDotsVertical className="text-xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 mr-2">
        <DropdownMenuLabel className="text-center">
          Change Status
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex items-center justify-center gap-5">
          <span>
            <EditTodoModal id={id} index={index} />
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
        <ChangeStatus statuses={statuses} id={id} status={status} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
