export default function TodoItem({ title, description }) {
  return (
    <ul className="bg-red-200">
      {title}, {description}
    </ul>
  );
}
