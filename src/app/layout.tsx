import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethereum BlockExplorer",
  description: "Ethereum mainnet blockexplorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-200`}
      >
        <div className="flex flex-col h-full min-h-screen w-screen min-w-[300px] max-w-[900px] mx-auto bg-white text-sm">
          <Navbar />
          <div className="flex-1 px-5">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
