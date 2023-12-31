import { useContext } from "react";
import { CrudContext } from "../context/CrudContext";

export default function useCrudContext() {
  return useContext(CrudContext);
}
