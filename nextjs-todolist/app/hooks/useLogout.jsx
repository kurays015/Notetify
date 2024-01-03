import { useMutation } from "@tanstack/react-query";
import axios from "../api/axios";
import { useToast } from "@chakra-ui/react";

export default function useLogout() {
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
      localStorage.removeItem("accessToken");
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
