import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";

export const useGetTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await axios.get("/todos", {
        withCredentials: true,
      });
      return data;
    },
  });
};