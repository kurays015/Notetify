import useLogin from "@/app/hooks/useLogin";
import useRegister from "@/app/hooks/useRegister";
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";

export default function LoginForm({ setOpen }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const formRef = useRef(null);
  const [register, setRegister] = useState(false);

  const {
    mutateAsync: login,
    isPending: loginLoading,
    error: loginError,
  } = useLogin();

  const {
    mutateAsync: registerUser,
    isPending: registerLoading,
    error: registerError,
  } = useRegister();

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

  async function handleRegister(e) {
    e.preventDefault();
    if (emailRef.current.value === "" || passwordRef.current.value === "")
      return;
    await registerUser({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    });
    setOpen(false);
  }

  return (
    <form ref={formRef} onSubmit={register ? handleRegister : handleLogin}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="email"
            className="text-right customSm:text-xs md:text-sm"
          >
            Email
          </Label>
          <Input
            disabled={loginLoading || registerLoading}
            id="email"
            className="col-span-3"
            placeholder="your email"
            ref={emailRef}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="password"
            className="text-right customSm:text-xs md:text-sm"
          >
            Password
          </Label>
          <Input
            disabled={loginLoading || registerLoading}
            type="password"
            id="password"
            className="col-span-3"
            placeholder="your password"
            ref={passwordRef}
          />
          {register && (
            <>
              <Label
                htmlFor="confirm-password"
                className="text-right customSm:text-xs md:text-sm"
              >
                Confirm Password
              </Label>
              <Input
                disabled={registerLoading}
                type="password"
                id="confirm-password"
                className="col-span-3"
                placeholder="confirm password"
                ref={confirmPasswordRef}
              />
            </>
          )}
        </div>
      </div>
      <DialogFooter className="customSemiMd:justify-between">
        <DialogDescription className="customSm:my-2">
          {register ? (
            <span className="customSm:text-xs customSemiMd:text-sm">
              Already have an account?{" "}
            </span>
          ) : (
            <span className="customSm:text-xs customSemiMd:text-sm">
              Don&apos;t have an account?{" "}
            </span>
          )}
          <span
            className="text-blue-500 cursor-pointer customSm:text-xs customSemiMd:text-sm"
            onClick={() => {
              setRegister(prev => !prev);
              formRef.current.reset();
              loginError.response = {};
              registerError.response = {};
            }}
          >
            {register ? "Login" : "Register"}
          </span>
        </DialogDescription>
        <Button type="submit" disabled={loginLoading || registerLoading}>
          {loginLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {loginLoading || registerLoading
            ? register
              ? "Registering"
              : "Logging in..."
            : register
            ? "Register"
            : "Login"}
        </Button>
      </DialogFooter>
      <p className="text-red-400 text-center mt-4">
        {loginError && loginError.response?.data}
        {registerError && registerError.response?.data}
      </p>
    </form>
  );
}
