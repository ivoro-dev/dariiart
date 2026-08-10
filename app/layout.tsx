import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/global/Preloader";
import Navbar from "@/components/global/Navbar";
import SmoothScroll from "@/components/global/SmoothScroll";
import Footer from "@/components/global/Footer";
import NextPageTransition from "@/components/global/NextPageTransition";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dariiarts",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heebo.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <Preloader />
        <Navbar />
        {children}
        <NextPageTransition />
        <Footer />
      </body>
    </html>
  );
}
