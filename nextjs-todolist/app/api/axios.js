import axios from "axios";

export default axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}`,
  withCredentials: true,
});

// process.env.NEXT_PUBLIC_BACKEND_BASE_URL
