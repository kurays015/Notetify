"use client";
import { ButtonGroup } from "@chakra-ui/react";
import ChakraSwitch from "./ChakraSwitch";
import ChakraModal from "./ChakraModal";

export default function ChakraButton() {
  return (
    <ButtonGroup mb="5" display="flex" alignItems="center" justifyContent="end">
      <ChakraModal />
      <ChakraSwitch />
    </ButtonGroup>
  );
}
