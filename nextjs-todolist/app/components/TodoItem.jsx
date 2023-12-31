import ChakraMenu from "../ui/ChakraMenu";
import ChakraBadge from "../ui/ChakraBadge";

export default function TodoItem({ todo, _id, isCompleted, description }) {
  return (
    <div className="p-4 bg-gray-300  rounded-md shadow-md mb-4 relative">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold mb-2 text-black">{todo}</h3>
        <ChakraMenu />
      </div>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <ChakraBadge isCompleted={isCompleted} />
    </div>
  );
}
