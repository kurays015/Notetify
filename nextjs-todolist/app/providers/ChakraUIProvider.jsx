"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "320px",
  xs: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1440px",
  "2xl": "1600px",
  "2xxl": "1750px",
};

const theme = extendTheme({ breakpoints });

export default function ChakraUIProvider({ children }) {
  return (
    <ChakraProvider theme={theme} resetCSS={false} disableGlobalStyle={true}>
      {children}
    </ChakraProvider>
  );
}
