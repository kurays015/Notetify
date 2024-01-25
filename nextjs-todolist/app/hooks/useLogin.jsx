import { useMutation } from "@tanstack/react-query";
import axios from "../api/axios";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: async credentials =>
      await axios.post("/auth/login", credentials),
    onSuccess: res => {
      queryClient.invalidateQueries(["todos"]);
      router.push("/todos");
      Cookies.set("user", res.data, "7d");
    },
  });
}
