export default function TodoItem({ title, description }) {
  return (
    <ul className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md">
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
        Title: {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        Description: {description}
      </p>
    </ul>
  );
}
// #0F1524
