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
        variant: "destructive",
        title: "Successfully deleted!",
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
