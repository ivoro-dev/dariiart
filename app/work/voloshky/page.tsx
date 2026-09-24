import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import VoloshkyHeroSection from "@/components/project/VoloshkyHeroSection";
import ProjectVideoSection from "@/components/project/ProjectVideoSection";
import ProjectDualImagesSection from "@/components/project/ProjectDualImagesSection";
import ProjectScaledVideoSection from "@/components/project/ProjectScaledVideoSection";
import ProjectFlagPatternsSection from "@/components/project/ProjectFlagPatternsSection";
import ProjectCampaignMotionSection from "@/components/project/ProjectCampaignMotionSection";

import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "VOLOSHKY — Dariiarts",
  description:
    "A brand identity for a Ukrainian dance ensemble that transforms the celebration of one culture into an invitation to celebrate many.",
};

export default function VoloshkyPage() {
  const project = projects.find((p) => p.id === "voloshky");

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <VoloshkyHeroSection />
      <ProjectVideoSection project={project} />
      <ProjectDualImagesSection project={project} />
      <ProjectScaledVideoSection project={project} />
      <ProjectFlagPatternsSection />
      <ProjectCampaignMotionSection />
    </main>
  );
}
