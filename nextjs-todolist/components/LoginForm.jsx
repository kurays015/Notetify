"use client";
import useLogin from "@/app/hooks/useLogin";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useRef } from "react";

export default function LoginForm({ setOpen }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {
    mutateAsync: login,
    isPending: loginLoading,
    error: loginError,
  } = useLogin();

  async function handleLogin(e) {
    e.preventDefault();
    if (emailRef.current.value === "" || passwordRef.current.value === "")
      return;
    await login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    setOpen(false);
  }
  return (
    <form onSubmit={handleLogin}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            disabled={loginLoading}
            id="email"
            className="col-span-3"
            placeholder="your email"
            ref={emailRef}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">
            Password
          </Label>
          <Input
            disabled={loginLoading}
            type="password"
            id="password"
            className="col-span-3"
            placeholder="your password"
            ref={passwordRef}
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" disabled={loginLoading}>
          {loginLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {loginLoading ? "Logging in..." : "Login"}
        </Button>
      </DialogFooter>
      <p className="text-red-400 text-center mt-4">
        {loginError && loginError.response?.data}
      </p>
    </form>
  );
}
