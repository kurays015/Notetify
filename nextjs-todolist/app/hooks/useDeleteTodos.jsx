import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";

export default function () {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id }) => await axios.delete(`/todos/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
}
