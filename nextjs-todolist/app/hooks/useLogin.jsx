import { useMutation } from "@tanstack/react-query";
import axios from "../api/axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useToast } from "@/components/ui/use-toast";

export default function useLogin() {
  const router = useRouter();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async credentials =>
      await axios.post("/auth/login", credentials),
    onSuccess: res => {
      console.log(res.data);
      toast({
        title: "Successfully logged in",
      });
      Cookies.set("user", res.data, "7d");
      router.push("/todos");
    },
    onError: ({ response }) => {
      toast({
        variant: "destructive",
        title: `Something went wrong ${response?.data}`,
      });
    },
  });
}
