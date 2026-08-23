import type { Metadata } from "next";
import WorkHeroSection from "@/components/work/WorkHeroSection";
import WorkProjectsSection from "@/components/work/WorkProjectsSection";

export const metadata: Metadata = {
  title: "Work — Dariiarts",
  description:
    "A selection of projects exploring identity, art direction, digital experiences and visual storytelling from cultural organisations and independent brands to creative campaigns.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F4]">
      <WorkHeroSection />
      <WorkProjectsSection />
    </main>
  );
}
