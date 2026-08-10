"use client";

import { motion } from "framer-motion";

interface ProcessStepNodeProps {
  delay?: number;
  isInView: boolean;
}

export function ProcessStepNode({ delay = 0, isInView }: ProcessStepNodeProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay,
      }}
      className="relative group cursor-pointer z-20 flex items-center justify-center"
    >
      {/* Outer soft shadow ring on hover */}
      <div className="absolute -inset-2 bg-[#FF6B53]/15 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Node Container Card */}
      <motion.div
        whileHover={{ scale: 1.12, rotate: 2 }}
        transition={{ type: "spring", stiffness: 350, damping: 15 }}
        className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-black/5 flex items-center justify-center relative"
      >
        {/* Grey inner circle dot */}
        <span className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#A1A1AA] group-hover:bg-[#FF6B53] transition-colors duration-300 block" />
      </motion.div>
    </motion.div>
  );
}
