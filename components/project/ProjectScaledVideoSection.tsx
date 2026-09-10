"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import type { Project } from "@/lib/data/projects";

type ProjectScaledVideoSectionProps = {
  project?: Project;
  videoUrl?: string;
};

export default function ProjectScaledVideoSection({
  project,
  videoUrl,
}: ProjectScaledVideoSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isInView = useInView(sectionRef, { amount: 0.1 });

  // Scroll-driven scale animation (scales from ~78% to 100% as user scrolls down)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 95%", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.78, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);

  const src = videoUrl || "/images/project-12.mp4";

  // Start playing video when user scrolls down to this section
  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 sm:px-12 md:px-16 py-10 sm:py-16 flex justify-center overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* Scroll-scaling video container */}
        <motion.div
          style={{ scale, opacity }}
          className="w-full relative overflow-hidden  bg-neutral-900 h-[65vh] sm:h-[75vh] lg:h-[80vh] min-h-[500px] sm:min-h-[640px] lg:min-h-[750px] shadow-md origin-center transform-gpu"
        >
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
            className="w-full h-full object-cover block pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
