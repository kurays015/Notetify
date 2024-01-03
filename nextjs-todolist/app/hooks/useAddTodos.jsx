import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";
import { useToast } from "@chakra-ui/react";

export default function useAddTodos() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: async newTodo => await axios.post("/todos", newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      toast({
        title: "Successfully added!",
        status: "success",
        isClosable: true,
        duration: "3000",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong, try again later",
        status: "error",
        isClosable: true,
      });
    },
  });
}
