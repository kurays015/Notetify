"use client";
import { Button } from "@chakra-ui/react";
import useAuthContext from "../hooks/useAuthContext";
import { useRouter } from "next/navigation";

export default function ChakraLogout() {
  const { logout } = useAuthContext();
  const router = useRouter();
  return (
    <div className="w-full text-right">
      <Button
        className="my-3"
        bg="blue.300"
        color="#fff"
        onClick={() => {
          logout();
          router.push("/");
        }}
      >
        Logout
      </Button>
    </div>
  );
}
