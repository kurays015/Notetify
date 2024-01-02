"use client";
import { createContext, useEffect, useRef, useState } from "react";
import axios from "../api/axios";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [error, setError] = useState("");
  const passwordRef = useRef(null);
  const initialRef = useRef(null);

  const handleLogin = async () => {
    try {
      const { data: accessToken } = await axios.post("/auth/login", {
        email: initialRef.current.value,
        password: passwordRef.current.value,
      });
      if (accessToken) {
        console.log(accessToken);
        localStorage.setItem("accessToken", accessToken);
      }
    } catch (err) {
      // setError(err?.response.data);
      console.log(err);
    }
  };

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
    handleLogin,
    showPassword,
    setShowPassword,
    isActive,
    setIsActive,
    error,
    setError,
    handleReset,
    initialRef,
    passwordRef,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
