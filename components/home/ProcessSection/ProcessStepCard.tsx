"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/lib/data/process";

interface ProcessStepCardProps {
  step: ProcessStep;
  isInView: boolean;
  delay?: number;
}

export function ProcessStepCard({ step, isInView, delay = 0 }: ProcessStepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        ease: [0.33, 1, 0.68, 1],
        delay,
      }}
      className="relative flex flex-col items-start max-w-[280px] sm:max-w-[320px] pointer-events-auto group"
    >
      {/* Giant Watermark Number */}
      <span className="absolute -top-12 -right-8 sm:-top-16 sm:-right-14 text-[110px] sm:text-[150px] md:text-[180px] font-extrabold text-black/[0.04] leading-none select-none pointer-events-none font-sans tracking-tight transition-transform duration-500 group-hover:scale-105 group-hover:text-black/[0.07]">
        {step.number}
      </span>

      {/* Step Content */}
      <div className="relative z-10 pt-1">
        <h3 className="text-lg sm:text-xl md:text-[25px] font-bold text-[#111111] mb-2 sm:mb-2.5 tracking-[-0.015em]">
          {step.title}
        </h3>
        <p className="text-xs sm:text-[14px] font-normal text-black/60 leading-[1.65]">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
