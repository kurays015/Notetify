import { LoginModal } from "@/components/LoginModal";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-8 text-center">
      <Welcome />
      <LoginModal />
    </main>
  );
}
