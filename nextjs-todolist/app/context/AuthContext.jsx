"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

  const value = {
    accessToken,
    setAccessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
