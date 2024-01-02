import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";
import { useToast } from "@chakra-ui/react";

export default function useLogin() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: async credentials =>
      await axios.post("/auth/login", credentials),
    onSuccess: ({ data: accessToken }) => {
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
      }
      toast({
        title: "Successfully logged in",
        status: "success",
        isClosable: true,
      });
    },
  });
}
