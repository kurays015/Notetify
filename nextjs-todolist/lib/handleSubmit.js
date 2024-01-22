"use server";

export default async function handleSubmit(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const res = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  console.log(res);
}
