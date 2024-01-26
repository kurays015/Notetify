"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export function LoginModal() {
  const [open, setOpen] = useState(false);
  const user = Cookies.get("user");
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      router.push("/todos");
    }
  }, []);

  return (
    <div className="text-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="border-2">
            Login
          </Button>
        </DialogTrigger>
        <DialogContent className="customSm:max-w-[310px] sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Welcome back!</DialogTitle>
          </DialogHeader>
          <LoginForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
