"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRef } from "react";
export function DialogDemo() {
  const emailRef = useRef();
  const passwordRef = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:8080/auth/login",
      {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
      {
        withCredentials: true,
      }
    );
    console.log(res);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Welcome back!</DialogTitle>
          <DialogDescription className="text-center">
            We miss you!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                ref={emailRef}
                name="email"
                id="email"
                className="col-span-3"
                placeholder="your email"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                ref={passwordRef}
                name="password"
                type="password"
                id="password"
                className="col-span-3"
                placeholder="your password"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Login</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
