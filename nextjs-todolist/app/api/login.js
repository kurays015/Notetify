import axios from "axios";
export default async function handleSubmit(formData) {
  try {
    // https://notetify-server.onrender.com/auth/login - NEED TO BRING THIS BACK ON DEPLOYMENT!

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/login`,
      {
        email: formData.get("email"),
        password: formData.get("password"),
      },
      {
        withCredentials: true,
      }
    );
    console.log(res);
  } catch (err) {
    console.log("Error!!!", err);
  }
}
