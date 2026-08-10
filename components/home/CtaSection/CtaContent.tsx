"use client";

import { motion } from "framer-motion";

interface CtaContentProps {
  heading: string;
  subheading: string;
  isInView: boolean;
}

export function CtaContent({ heading, subheading, isInView }: CtaContentProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 md:mb-12">
      {/* Heading */}
      <div className="overflow-hidden mb-6">
        <motion.h2
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
          className="text-[clamp(34px,4.5vw,60px)] font-semibold tracking-[-0.02em] leading-[1.1] text-white"
        >
          {heading}
        </motion.h2>
      </div>

      {/* Subheading */}
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
          className="text-[clamp(15px,1.3vw,18px)] font-normal leading-[1.65] text-white/70 max-w-[580px]"
        >
          {subheading}
        </motion.p>
      </div>
    </div>
  );
}
