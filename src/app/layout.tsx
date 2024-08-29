import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import StoreProvider from "@/provider/StoreProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shofy",
  description: "E-commerce application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          {children}
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              // Define default options

              duration: 1000,
              style: {
                background: "#000",
                color: "#fff",
              },
            }}
          />
        </StoreProvider>
      </body>
    </html>
  );
}
