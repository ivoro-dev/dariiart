import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import TheShadowHeroSection from "@/components/project/TheShadowHeroSection";
import TheShadowBannerSection from "@/components/project/TheShadowBannerSection";
import TheShadowStorySection from "@/components/project/TheShadowStorySection";
import TheShadowVisualGridSection from "@/components/project/TheShadowVisualGridSection";
import TheShadowMeetSection from "@/components/project/TheShadowMeetSection";
import TheShadowPostersSection from "@/components/project/TheShadowPostersSection";
import TheShadowProcessSection from "@/components/project/TheShadowProcessSection";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "THE SHADOW — Dariiarts",
  description:
    "A dark, atmospheric exploration of light, shadow, and visual storytelling.",
};

export default function TheShadowPage() {
  const project = projects.find((p) => p.id === "the-shadow");

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <TheShadowHeroSection />
      <TheShadowBannerSection />
      <TheShadowStorySection />
      <TheShadowVisualGridSection />
      <TheShadowMeetSection />
      <TheShadowPostersSection />
      <TheShadowProcessSection />
    </main>
  );
}
