"use client";
import { createContext, useEffect, useRef, useState } from "react";
import axios from "../api/axios";
import { useDisclosure } from "@chakra-ui/react";
import useLogin from "../hooks/useLogin";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const passwordRef = useRef(null);
  const initialRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutateAsync: login, isPending, isError, error } = useLogin();

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

  const value = {
    accessToken,
    setAccessToken,
    showPassword,
    setShowPassword,
    isActive,
    setIsActive,
    error,
    handleReset,
    initialRef,
    passwordRef,
    isOpen,
    onOpen,
    onClose,
    login,
    isPending,
    isError,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
