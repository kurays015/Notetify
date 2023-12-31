import Todos from "./components/Todos";
import ChakraButton from "./ui/ChakraButton";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="p-6">
      {/* ----> login, dark mode  */}
      <ChakraButton />
      <Header />
      <Todos />
    </main>
  );
}
