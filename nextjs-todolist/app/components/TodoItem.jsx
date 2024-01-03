import ChakraMenu from "../ui/ChakraMenu";
import ChakraBadge from "../ui/ChakraBadge";
import ChakraUpdateTodo from "../ui/ChakraUpdateTodo";
import useCrudContext from "../hooks/useCrudContext";

export default function TodoItem({ todo, _id, isCompleted, description }) {
  const { update } = useCrudContext();
  console.log(update);
  return (
    <div className="p-4 bg-gray-300  rounded-md shadow-md mb-4 relative">
      <div className="flex justify-between">
        <h3
          className="text-lg font-semibold mb-2 text-black"
          onClick={() => console.log(todo, _id)}
        >
          {todo}
        </h3>
        <ChakraMenu todo={todo} _id={_id} />
      </div>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <ChakraBadge isCompleted={isCompleted} />
      {update[_id] && <ChakraUpdateTodo _id={_id} />}
    </div>
  );
}
