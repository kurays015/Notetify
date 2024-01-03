import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";
import { useToast } from "@chakra-ui/react";

export default function useUpdateTodos() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: async ({ _id, todo, description }) =>
      await axios.put(`/todos/${_id}`, { todo, description }),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      toast({
        title: "Successfully updated!",
        status: "success",
        isClosable: true,
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
