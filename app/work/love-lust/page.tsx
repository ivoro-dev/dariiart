import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import LoveLustHeroSection from "@/components/project/LoveLustHeroSection";
import LoveLustGallerySection from "@/components/project/LoveLustGallerySection";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "LOVE, LUST AND VIOLENCE — Dariiarts",
  description:
    "Helping a photographer sharpen the visual direction for his fine-art exhibition concept.",
};

export default function LoveLustPage() {
  const project = projects.find((p) => p.id === "love-lust");

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f7f5]">
      <LoveLustHeroSection />
      <LoveLustGallerySection />
    </main>
  );
}
