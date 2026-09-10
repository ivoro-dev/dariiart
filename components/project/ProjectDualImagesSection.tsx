"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data/projects";

type ProjectDualImagesSectionProps = {
  project?: Project;
  leftImage?: string;
  rightImage?: string;
};

export default function ProjectDualImagesSection({
  project,
  leftImage,
  rightImage,
}: ProjectDualImagesSectionProps) {
  const leftSrc = leftImage || project?.image || "/images/project-1.png";
  const rightSrc = rightImage || "/images/project-11.png";

  return (
    <section className="w-full bg-white px-6 sm:px-12 md:px-16 pb-8 sm:pb-12  flex justify-center">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {/* Left Half: project-1.png */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative overflow-hidden  bg-neutral-100 shadow-sm group"
        >
          <Image
            src={leftSrc}
            alt="Project Feature 1"
            width={1200}
            height={800}
            className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </motion.div>

        {/* Right Half: project-11.png */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="w-full relative overflow-hidden  bg-neutral-100 shadow-sm group"
        >
          <Image
            src={rightSrc}
            alt="Project Feature 2"
            width={1200}
            height={800}
            className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </motion.div>
      </div>
    </section>
  );
}
