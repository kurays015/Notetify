import { Spinner } from "@chakra-ui/react";
import React from "react";

export default function ChakraSpinner() {
  return (
    <div className=" flex items-center justify-center my-12 p-5">
      <Spinner
        thickness="5px"
        speed="2s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
}
