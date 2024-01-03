import axios from "axios";

export default axios.create({
  baseURL: "https://notetify-server.onrender.com/",
  withCredentials: true,
});
