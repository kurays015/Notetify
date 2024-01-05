"use client";
import { createContext, useEffect, useRef, useState } from "react";
import useLogin from "../hooks/useLogin";
import useRegister from "../hooks/useRegister";
import useLogout from "../hooks/useLogout";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const {
    mutateAsync: login,
    isPending: loginLoading,
    error: loginError,
  } = useLogin();
  const { mutateAsync: register, isPending: registerLoading } = useRegister();
  const { mutate: logout, isPending: logoutLoading } = useLogout();

  const handleReset = () => {
    setIsActive(prev => !prev);
    setShowPassword(false);
    passwordRef.current.value = "";
    emailRef.current.value = "";
  };

  async function handleLogin() {
    await login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }

  async function handleRegister() {
    await register({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }

  const value = {
    showPassword,
    setShowPassword,
    isActive,
    handleReset,
    emailRef,
    passwordRef,
    handleLogin,
    loginLoading,
    loginError,
    registerLoading,
    handleRegister,
    logout,
    logoutLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
