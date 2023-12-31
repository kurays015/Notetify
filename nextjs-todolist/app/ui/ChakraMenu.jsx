import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HiDotsVertical } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { TbArrowsExchange2 } from "react-icons/tb";

export default function ChakraMenu() {
  return (
    <Menu direction="ltr" isLazy={true}>
      <MenuButton as={IconButton} bg="gray" icon={<HiDotsVertical />} />
      <MenuList bg="#242424">
        <MenuItem
          icon={<CiEdit />}
          bg="#1c1c1c"
          color="white"
          fontSize={{ base: ".9rem", sm: "1.1rem" }}
        >
          Edit
        </MenuItem>
        <MenuItem
          icon={<MdDeleteOutline />}
          bg="#1c1c1c"
          color="white"
          fontSize={{ base: ".9rem", sm: "1.1rem" }}
        >
          Delete
        </MenuItem>
        <MenuItem
          icon={<TbArrowsExchange2 />}
          bg="#1c1c1c"
          color="white"
          fontSize={{ base: ".9rem", sm: "1.1rem" }}
        >
          Change Status
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
