import axios from "axios";

export default axios.create({
  baseURL: "https://notetify-server.onrender.com", // https://notetify-server.onrender.com/ - backend
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
