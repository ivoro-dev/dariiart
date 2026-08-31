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
  title: {
    default: "Dariiarts — Independent Art Director & Graphic Designer",
    template: "%s | Dariiarts",
  },
  description:
    "Portfolio of Dariia Chervoniak, independent Art Director and Graphic Designer based in the UK, specializing in concept-led identities, art direction, and digital experiences.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
