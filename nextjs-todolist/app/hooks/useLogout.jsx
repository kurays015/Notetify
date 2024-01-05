import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";
import { useToast } from "@chakra-ui/react";

export default function useLogout() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: async () => await axios.post("/auth/logout"),
    onSuccess: () => {
      toast({
        title: "Successfully logged out!",
        status: "success",
        isClosable: true,
        duration: "3000",
      });
      queryClient.invalidateQueries(["todos"]);
    },
    onError: ({ response }) => {
      toast({
        title: "Something went wrong, try again later",
        status: "error",
        isClosable: true,
      });
    },
  });
}
