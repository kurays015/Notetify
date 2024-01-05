import React from "react";
import Todos from "../components/Todos";
import ChakraLogout from "../ui/ChakraLogout";
import Header from "../components/Header";
export default function page() {
  return (
    <main className="p-5">
      <ChakraLogout />
      <Header />
      <Todos />
    </main>
  );
}
