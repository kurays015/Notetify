import TodoCard from "@/components/TodoCard";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default function TodoPage() {
  const user = cookies().get("accessToken");
  console.log(user);

  if (!user) {
    redirect("/");
  }

  return (
    <div className="flex justify-center">
      <TodoCard />
    </div>
  );
}
