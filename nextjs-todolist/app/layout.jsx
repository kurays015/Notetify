import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import { ThemeToggle } from "@/components/ui/modetoggle";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notetify - Remember your notes!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system">
          <ReactQueryProvider>
            <ThemeToggle />
            {children}
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
