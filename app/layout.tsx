import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

import { PHProvider } from "./providers";
import dynamic from "next/dynamic";

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simon Hazard",
  description: "Developer front-end based in Le Havre",
  openGraph: {
    title: "Simon Hazard",
    description: "Developer front-end based in Le Havre",
    type: "website",
    url: "https://www.simonhazard.com/",
    siteName: "Simon Hazard",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={cn("overflow-y-scroll", inter.className)}>
          <PostHogPageView />
          <div className="flex flex-col min-h-dvh">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </PHProvider>
    </html>
  );
}
