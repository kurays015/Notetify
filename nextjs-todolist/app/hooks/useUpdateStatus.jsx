import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";
import { useToast } from "@/components/ui/use-toast";

export default function useUpdateStatus() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async ({ id, status }) =>
      await axios.put(`/todos/update-status/${id}`, { status }),
    onSuccess: () => {
      toast({
        title: "Change status successfully!",
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
