import type { Metadata } from "next";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactDetailsSection from "@/components/contact/ContactDetailsSection";

export const metadata: Metadata = {
  title: "Contact — Dariiarts",
  description:
    "Get in touch with Dariia Chervoniak. Available for Art Direction, Brand Identity, Creative Strategy, Concept creation and Graphic Design.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F4]">
      <ContactHeroSection />
      <ContactDetailsSection />
    </main>
  );
}
