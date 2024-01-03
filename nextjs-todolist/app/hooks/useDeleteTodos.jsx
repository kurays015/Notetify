import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";
import { useToast } from "@chakra-ui/react";

export default function useDeleteTodos() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: async _id => await axios.delete(`/todos/${_id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      toast({
        title: "Successfully deleted!",
        status: "success",
        isClosable: true,
      });
    },
  });
}
