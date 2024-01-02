import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";

export default function useAddTodos() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async newTodo => {
      const { data } = await axios.post("/todos", newTodo);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
}
