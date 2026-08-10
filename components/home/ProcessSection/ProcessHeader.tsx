"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProcessHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  isInView: boolean;
}

export function ProcessHeader({
  eyebrow,
  title,
  description,
  buttonText,
  buttonHref,
  isInView,
}: ProcessHeaderProps) {
  return (
    <div className="flex flex-col items-start max-w-lg z-10 relative">
      {/* Eyebrow */}
      <div className="overflow-hidden mb-4">
        <motion.span
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
          className="block text-black text-[11px] sm:text-xs md:text-[13px] font-bold tracking-[0.14em] uppercase"
        >
          {eyebrow}
        </motion.span>
      </div>

      {/* Heading */}
      <div className="overflow-hidden mb-3">
        <motion.h2
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.18 }}
          className="text-[clamp(32px,3.8vw,52px)] font-bold text-[#111111] leading-[1.12] tracking-[-0.02em]"
        >
          {title}
        </motion.h2>
      </div>

      {/* Description */}
      <div className="overflow-hidden mb-5">
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.26 }}
          className="text-[clamp(15px,1.2vw,17px)] font-normal text-black/60 leading-[1.65] max-w-[440px]"
        >
          {description}
        </motion.p>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.34 }}
      >
        <Link href={buttonHref}>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="bg-black text-white px-9 py-3.5 rounded-full font-medium text-sm tracking-[0.02em] shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.25)] hover:bg-black/90 transition-all duration-300 cursor-pointer"
          >
            {buttonText}
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
