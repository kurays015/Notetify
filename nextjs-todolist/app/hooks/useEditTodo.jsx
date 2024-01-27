import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";
import { useToast } from "@/components/ui/use-toast";

export default function useEditTodo() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async ({ id, title, description }) =>
      await axios.put(`/todos/${id}`, { title, description }),
    onSuccess: () => {
      toast({
        title: "Successfully updated!",
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
