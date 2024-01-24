import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { RiArrowDropDownFill } from "react-icons/ri";
import { LogOut } from "lucide-react";

export default function Logout() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="none" className="ring-offset-0">
          <RiArrowDropDownFill className="text-black text-2xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuItem className="flex items-center">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
