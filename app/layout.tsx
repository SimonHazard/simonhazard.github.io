import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simon Hazard",
  description: "Simon Hazard website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("overflow-y-scroll", inter.className)}>
        <div className="flex flex-col min-h-dvh">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
