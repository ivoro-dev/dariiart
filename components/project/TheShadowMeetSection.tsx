"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function TheShadowMeetSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={containerRef}
      className="w-full bg-white px-6 sm:px-12 md:px-16 py-6 sm:py-12 flex flex-col justify-center box-border"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-10">
        {/* Title: Meet The Shadow (Left Aligned Fully) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <h2 className="text-[clamp(18px,4vw,22px)] font-normal uppercase tracking-tight leading-tight">
            Meet Your Shadow
          </h2>
        </motion.div>

        {/* 2 Images: meet-1 on left, meet-2 on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full items-start">
          {/* Left: meet-1.jpg */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="w-full relative overflow-hidden group"
          >
            <Image
              src="/projects/the-shadow/meet-1.jpg"
              alt="Meet The Shadow 1"
              width={1200}
              height={1600}
              className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </motion.div>

          {/* Right: meet-2.jpg */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            className="w-full md:w-[85%] relative overflow-hidden group"
          >
            <Image
              src="/projects/the-shadow/meet-2.jpg"
              alt="Meet The Shadow 2"
              width={1200}
              height={1600}
              className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
