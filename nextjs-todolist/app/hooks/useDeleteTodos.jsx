import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";
import { useToast } from "@/components/ui/use-toast";

export default function () {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async ({ id }) => await axios.delete(`/todos/${id}`),
    onSuccess: () => {
      toast({
        description: "Successfully deleted!",
      });
      queryClient.invalidateQueries(["todos"]);
    },
  });
}
