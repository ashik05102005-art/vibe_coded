import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/ui/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashik | Python Django Developer",
  description: "Passionate Python Django developer specializing in building scalable backend architectures and efficient web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingScreen />
        <div className="custom-cursor hidden md:block" id="cursor" />
        <div className="custom-cursor-follower hidden md:block" id="cursor-follower" />
        <main className="relative z-10">{children}</main>
        
        {/* Cinematic Background Noise/Grain */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </body>
    </html>
  );
}
