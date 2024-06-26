import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBMplex = Inter({ subsets: ["latin"],weight:['400','500','600','700'],variable:'--font-ibm-plex' });

export const metadata: Metadata = {
  title: "CockTail",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={cn("font-IBMplex antialiased",IBMplex.variable)}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
