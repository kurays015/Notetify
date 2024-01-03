import { useMutation } from "@tanstack/react-query";
import axios from "../api/axios";

export default function useRegister() {
  return useMutation({
    mutationFn: async userInfo => axios.post("/auth/register", userInfo),
    onSuccess: () => {
      toast({
        title: "Successfully created!",
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
