import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";

export default function useEditTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, title, description }) =>
      await axios.put(`/todos/${id}`, { title, description }),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
}
