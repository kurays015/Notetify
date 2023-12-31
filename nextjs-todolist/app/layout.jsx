import ReactQueryProvider from "./providers/ReactQueryProvider";
import ChakraUIProvider from "./providers/ChakraUIProvider";
import ThemeContextProvider from "./context/ThemeContext";
import AuthContextProvider from "./context/AuthContext";
import { Inter } from "next/font/google";
import "./globals.css";
import CrudContextProvider from "./context/CrudContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notetify - Remember your notes!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white`}
        suppressHydrationWarning={true}
      >
        <ReactQueryProvider>
          <AuthContextProvider>
            <ThemeContextProvider>
              <ChakraUIProvider>
                <CrudContextProvider>{children}</CrudContextProvider>
              </ChakraUIProvider>
            </ThemeContextProvider>
          </AuthContextProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
