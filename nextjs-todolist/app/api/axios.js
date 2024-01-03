import axios from "axios";

export default axios.create({
  baseURL: "https://noteserver-6snb.onrender.com", // https://notetify-server.onrender.com/
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
