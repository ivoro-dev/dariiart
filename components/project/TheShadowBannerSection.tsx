"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TheShadowBannerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={containerRef}
      className="w-full bg-white px-6 sm:px-12 md:px-16 py-8 sm:py-12 flex justify-center"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[16/9] min-h-[350px] sm:min-h-[500px] md:min-h-[620px] bg-black flex items-center justify-center relative overflow-hidden rounded-xs shadow-md"
        >
          {/* Centered Title */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-[clamp(36px,6vw,76px)] font-bold text-white tracking-tight leading-none text-center select-none"
          >
            The Shadow
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
