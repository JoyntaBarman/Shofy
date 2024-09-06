import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import StoreProvider from "@/provider/StoreProvider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer/Footer";


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
      <body>
        <StoreProvider>
          <Header />
          {children}
          <Footer/>
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
