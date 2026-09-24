import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import MoorPerfumeHeroSection from "@/components/project/MoorPerfumeHeroSection";
import MoorPerfumeGallerySection from "@/components/project/MoorPerfumeGallerySection";
import MoorPerfumeVideoSection from "@/components/project/MoorPerfumeVideoSection";
import MoorPerfumeScreenSection from "@/components/project/MoorPerfumeScreenSection";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "MOOR PERFUME — Dariiarts",
  description:
    "A visual identity for The Moor Perfume, transforming a generic perfume shop into an authentic independent fragrance brand.",
};

export default function MoorPerfumePage() {
  const project = projects.find((p) => p.id === "moor-perfume");

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <MoorPerfumeHeroSection />
      <MoorPerfumeGallerySection />
      <MoorPerfumeVideoSection />
      <MoorPerfumeScreenSection />
    </main>
  );
}
