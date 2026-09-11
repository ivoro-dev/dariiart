import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import ProjectHeroSection from "@/components/project/ProjectHeroSection";
import ProjectVideoSection from "@/components/project/ProjectVideoSection";
import ProjectDualImagesSection from "@/components/project/ProjectDualImagesSection";
import ProjectScaledVideoSection from "@/components/project/ProjectScaledVideoSection";
import ProjectFlagPatternsSection from "@/components/project/ProjectFlagPatternsSection";
import ProjectCampaignMotionSection from "@/components/project/ProjectCampaignMotionSection";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id) || (id === "1" ? projects[0] : undefined);

  if (!project) {
    return { title: "Project Not Found — Dariiarts" };
  }

  return {
    title: `${project.title} — Dariiarts`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id) || (id === "1" ? projects[0] : undefined);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <ProjectHeroSection project={project} />
      <ProjectVideoSection project={project} />
      <ProjectDualImagesSection project={project} />
      <ProjectScaledVideoSection project={project} />
      <ProjectFlagPatternsSection />
      <ProjectCampaignMotionSection />
    </main>
  );
}

