"use client";

import * as React from "react";
import { BiDotsVertical } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
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

export function ShowMore() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="none" className="p-0 pl-2">
          <BiDotsVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel className="text-center">
          Change Status
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex items-center justify-center gap-5 my-2">
          <span>
            <CiEdit />
          </span>
          <span>
            <MdDeleteOutline />
          </span>
        </div>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Current Todos
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
        >
          In Progress
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Completed
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
