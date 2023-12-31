import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import axios from "../api/axios";

export default function useGetTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await axios.get("/todos");
      // const { data } = await axios.get(
      //   " https://jsonplaceholder.typicode.com/users/1/todos"
      // );
      return data;
    },
  });
}

// https://jsonplaceholder.typicode.com/users/1/todos
