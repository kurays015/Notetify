import axios from "../api/axios";
import useAuthContext from "./useAuthContext";

export default function useLogout() {
  const logout = async () => {
    try {
      const { data } = await axios.post("/auth/logout");
    } catch (err) {
      console.log(err);
    }
  };
  return { logout };
}
