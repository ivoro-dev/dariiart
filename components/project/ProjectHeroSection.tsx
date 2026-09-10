"use client";

import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";
import type { Project } from "@/lib/data/projects";

type ProjectHeroSectionProps = {
  project: Project;
};

export default function ProjectHeroSection({ project }: ProjectHeroSectionProps) {
  const labels = project.labels || ["ART DIRECTION", "BRAND IDENTITY"];
  const heroSubtitle =
    project.heroSubtitle ||
    "Voloshky Ukrainian Dance Ensemble, a Ukrainian dance company based in the United States, was preparing a world tour across Africa, America, Asia, and Europe.";
  const conceptTag = project.conceptTag || "Concept Development";
  const challengeText =
    project.challengeText ||
    "Create a visual identity for a Ukrainian dance ensemble's world tour that celebrates Ukrainian heritage while embracing the cultural identity of every destination.";
  const quoteText =
    project.quoteText ||
    '"Celebrating one culture can become an invitation to celebrate many."';

  return (
    <section className="w-full min-h-[100dvh] bg-white px-6 sm:px-12 md:px-16 pt-20 sm:pt-24 md:pt-28 pb-12 flex flex-col justify-between box-border">
      <div className="max-w-7xl  mx-auto flex flex-col justify-center w-full my-auto">
        {/* Top Content: Title, Hero Subtitle & Labels (Padded to the right) */}
        <div className="pl-6 sm:pl-16 md:pl-28 lg:pl-30">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3"
          >
            <h1 className="text-[clamp(33px,6.3vw,72px)] font-extrabold tracking-[-0.03em] uppercase text-black leading-[0.95]">
              {project.title}
            </h1>
          </motion.div>

          {/* Hero Subtitle / Lead Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="max-w-[600px] mb-1"
          >
            <p className="text-[clamp(17px,2.1vw,26px)] font-bold text-black leading-[1.25] tracking-tight">
              {heroSubtitle}
            </p>
          </motion.div>

          {/* Badges & Concept Development Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            className="inline-flex flex-col items-stretch gap-2.5 mb-10 sm:mb-14 md:mb-16 w-fit"
          >
            {/* Row 1: Labels (defines the width) */}
            <div className="flex items-center gap-2.5">
              {labels.map((label) => (
                <span
                  key={label}
                  className="px-1.5 py-1 text-[11px] sm:text-[12px] font-semibold tracking-wider text-black/85 border border-[#D0DBEA] rounded-md uppercase bg-white whitespace-nowrap"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Row 2: Concept Development pill button (stretches to match exact width of top row) */}
            <button
              type="button"
              className="w-full px-1 py-1.5 rounded-md bg-[#C5D8FF] text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#B4CDFF] active:scale-[0.98] cursor-pointer shadow-xs"
            >
              <span className="text-[16px] tracking-normal font-medium">{conceptTag}</span>
              <span className="w-4.5 h-4.5 rounded-full border border-black/50 flex items-center justify-center shrink-0">
                <PlusIcon className="w-3 h-3 stroke-[2.5]" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Challenge Statement & Quote Section (Positioned more on the left) */}
        <div className="flex flex-col w-full">
          {/* Challenge Statement (Left aligned) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
            className="max-w-[410px]"
          >
            <p className="text-[clamp(14px,1.4vw,18px)] font-medium text-black/90 leading-[1.2]">
              {challengeText}
            </p>
          </motion.div>

          {/* Indented Quote (Offset to the right relative to challenge statement) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
            className="max-w-[280px] ml-[8%] sm:ml-[12%] md:ml-[16%] mt-6 sm:mt-8 md:mt-4"
          >
            <p className="text-[clamp(13px,1.30vw,16px)] font-bold text-black/80 leading-[1.2]">
              {quoteText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
