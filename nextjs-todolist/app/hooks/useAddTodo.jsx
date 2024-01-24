import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";

export default function useAddTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async userTodo => await axios.post("/todos", userTodo),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
}
