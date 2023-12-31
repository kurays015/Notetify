"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
