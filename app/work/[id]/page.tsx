import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

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
  const projectIndex = projects.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-[#F7F6F4] px-8 md:px-24 pt-[140px] md:pt-[160px] pb-32">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-black/60 hover:text-black transition-colors mb-12"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to Work</span>
        </Link>

        {/* Title & Category */}
        <div className="flex flex-col gap-3 mb-12 border-b border-black/10 pb-8">
          <span className="text-xs md:text-sm font-bold tracking-[0.12em] uppercase text-black/40">
            {project.category} / {project.year}
          </span>
          <h1 className="text-[clamp(40px,7vw,90px)] font-bold uppercase leading-none tracking-[-0.02em] text-black">
            {project.title}
          </h1>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 border-b border-black/10 pb-12">
          <div>
            <span className="block text-xs uppercase font-bold tracking-widest text-black/40 mb-1">
              Client
            </span>
            <span className="text-base font-semibold text-black">
              {project.client || "Client Work"}
            </span>
          </div>

          <div>
            <span className="block text-xs uppercase font-bold tracking-widest text-black/40 mb-1">
              Year
            </span>
            <span className="text-base font-semibold text-black">
              {project.year}
            </span>
          </div>

          <div className="md:col-span-2">
            <span className="block text-xs uppercase font-bold tracking-widest text-black/40 mb-1">
              Services
            </span>
            <div className="flex flex-wrap gap-2">
              {(project.services || project.labels).map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 border border-black/40 text-xs font-semibold uppercase rounded-sm text-black/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] mb-16 overflow-hidden rounded-2xl bg-black/5 border border-black/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-black">
              Overview & Concept
            </h2>
          </div>
          <div className="md:col-span-2 flex flex-col gap-6">
            <p className="text-[clamp(18px,2vw,24px)] font-normal leading-[1.4] text-black">
              {project.description}
            </p>
            {project.longDescription && (
              <p className="text-base md:text-lg leading-[1.65] text-black/70">
                {project.longDescription}
              </p>
            )}
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="flex flex-col gap-12 mb-24">
            {project.gallery.map((imgUrl, i) => (
              <div
                key={i}
                className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-black/10"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} gallery image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Next Project Footer Bar */}
        <div className="pt-16 border-t border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase font-bold tracking-widest text-black/40">
              Next Project
            </span>
            <span className="text-2xl md:text-3xl font-bold uppercase text-black">
              {nextProject.title}
            </span>
          </div>

          <Link
            href={`/work/${nextProject.id}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-black/80 transition-colors"
          >
            <span>View Project</span>
            <ArrowUpRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
