import { useMutation } from "@tanstack/react-query";
import axios from "../api/axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function useRegister() {
  const { toast } = useToast();
  const router = useRouter();
  return useMutation({
    mutationFn: async credentails =>
      await axios.post("/auth/register", credentails),
    onSuccess: res => {
      toast({
        title: "Successfully Registered!",
      });
      Cookies.set("user", res.data, "7d");
      router.push("/todos");
    },
  });
}
