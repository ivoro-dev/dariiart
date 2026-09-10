"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/lib/data/projects";

type ProjectVideoSectionProps = {
  project?: Project;
  videoUrl?: string;
};

export default function ProjectVideoSection({ project, videoUrl }: ProjectVideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "50px 0px" });

  const src = videoUrl || project?.videoUrl || "/images/project-11.mp4";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [src]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-white px-6 sm:px-12 md:px-16 py-8 sm:py-16 flex justify-center"
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* Height-expanding video container */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "center" }}
          className="w-full relative overflow-hidden  bg-neutral-900 h-[88vh] sm:h-[98vh] lg:h-[108vh] min-h-[700px] sm:min-h-[900px] lg:min-h-[1050px] shadow-md"
        >
          <video
            ref={videoRef}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
            className="w-full h-full object-cover rounded-xl sm:rounded-2xl block"
          />
        </motion.div>
      </div>
    </section>
  );
}
