import Completed from "@/components/Completed";
import InProgress from "@/components/InProgress";
import TodoCard from "@/components/TodoCard";
export default function TodoPage() {
  return (
    <div className="flex gap-5 customSm:flex-col lg:flex-row">
      <TodoCard />
      <InProgress />
      <Completed />
    </div>
  );
}
