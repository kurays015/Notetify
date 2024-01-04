import axios from "axios";

export default axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`, // `${process.env.NEXT_PUBLIC_BACKEND_URL}`
  withCredentials: true,
});
