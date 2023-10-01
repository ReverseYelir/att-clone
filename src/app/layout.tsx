import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AT&T Clone",
  description: "A Next.js + React + Tailwind application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-[100dvh] flex flex-col w-full bg-white">
      <body className={inter.className + " flex-grow min-h-[100dvh]"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
