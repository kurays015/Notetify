import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();
  return useMutation({
    mutationFn: async credentials =>
      await axios.post("/auth/login", credentials),
    onSuccess: ({ data: access }) => {
      queryClient.invalidateQueries(["todos"]);
      toast({
        title: "Successfully logged in",
        status: "success",
        isClosable: true,
      });
      if (access) {
        router.push("/todos");
      }
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
