import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";
import { useToast } from "@/components/ui/use-toast";

export default function useAddTodo() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async userTodo => await axios.post("/todos", userTodo),
    onSuccess: () => {
      toast({
        title: "Successfully added!",
      });
      queryClient.invalidateQueries(["todos"]);
    },
    onError: ({ response }) => {
      toast({
        variant: "destructive",
        title: `Something went wrong ${response?.data}`,
      });
    },
  });
}
