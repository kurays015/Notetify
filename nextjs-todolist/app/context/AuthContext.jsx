"use client";
import { createContext, useEffect, useRef, useState } from "react";
import axios from "../api/axios";
import { useDisclosure } from "@chakra-ui/react";
import useLogin from "../hooks/useLogin";
import useRegister from "../hooks/useRegister";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const passwordRef = useRef(null);
  const initialRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    mutateAsync: login,
    isPending: loginLoading,
    error: loginError,
  } = useLogin();

  const {
    mutateAsync: register,
    isPending: registerLoading,
    error: registerError,
  } = useRegister();

  const handleReset = () => {
    setIsActive(prev => !prev);
    setShowPassword(false);
    passwordRef.current.value = "";
    initialRef.current.value = "";
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
    }
  }, []);

  async function handleLogin() {
    await login({
      email: initialRef.current.value,
      password: passwordRef.current.value,
    });
    onClose();
  }

  async function handleRegister() {
    await register({
      email: initialRef.current.value,
      password: passwordRef.current.value,
    });
    onClose();
  }

  function homeLogin() {
    onOpen();
    setIsActive(true);
  }

  const value = {
    accessToken,
    setAccessToken,
    showPassword,
    setShowPassword,
    isActive,
    loginError,
    handleReset,
    initialRef,
    passwordRef,
    isOpen,
    onClose,
    handleLogin,
    loginLoading,
    registerLoading,
    registerError,
    handleRegister,
    homeLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
