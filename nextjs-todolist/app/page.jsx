import Todos from "./components/Todos";
import ChakraButton from "./ui/ChakraButton";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <main className="p-6">
        {/* ----> login, dark mode  */}
        <ChakraButton />
        <Header />
        <Todos />
      </main>
      <small className="fixed bottom-5 w-full text-center text-slate-800">
        Made with ❤️ by Christ...
      </small>
      <p>{process.env.NEXT_PUBLIC_BACKEND_URL}</p>
    </>
  );
}
