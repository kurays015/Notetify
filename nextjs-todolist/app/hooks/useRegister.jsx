import { useMutation } from "@tanstack/react-query";
import axios from "../api/axios";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function useRegister() {
  const toast = useToast();
  const router = useRouter;
  return useMutation({
    mutationFn: async userInfo => axios.post("/auth/register", userInfo),
    onSuccess: ({ data: access }) => {
      toast({
        title: "Successfully created!",
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
