import type { Metadata } from "next";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutVideoSection from "@/components/about/AboutVideoSection";

export const metadata: Metadata = {
  title: "About | Dariiarts",
  description:
    "Independent Art Director and Graphic Designer based in the UK.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutVideoSection />
    </main>
  );
}
