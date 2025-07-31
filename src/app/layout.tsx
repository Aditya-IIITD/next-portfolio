import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Janager",
  description:
    "Portfolio of Aditya Janager, a passionate full-stack engineer specializing in building scalable, production-ready web applications with Next.js, React, Node.js, and cloud technologies.",
  generator: "NextJs 14",
  icons: {
    icon: "/code.png",
    shortcut: "/code.png",
    apple: "/code.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
