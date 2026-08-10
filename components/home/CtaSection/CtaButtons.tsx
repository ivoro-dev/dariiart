"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

interface CtaButtonsProps {
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
  isInView: boolean;
}

export function CtaButtons({
  primaryButton,
  secondaryButton,
  isInView,
}: CtaButtonsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md mx-auto"
    >
      {/* Primary Button - Contact Me */}
      <Link href={primaryButton.href} className="w-full sm:w-auto">
        <motion.button
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="w-full sm:w-auto bg-white text-black px-9 py-4 rounded-full font-semibold text-sm tracking-[0.02em] inline-flex items-center justify-center gap-2.5 shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_14px_36px_rgba(255,255,255,0.25)] hover:bg-zinc-100 transition-all duration-300 cursor-pointer"
        >
          <span>{primaryButton.label}</span>
          <ArrowUpRightIcon width={16} height={16} strokeWidth={2.5} />
        </motion.button>
      </Link>

      {/* Secondary Button - View Work */}
      <Link href={secondaryButton.href} className="w-full sm:w-auto">
        <motion.button
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="w-full sm:w-auto border border-white/30 hover:border-white text-white px-9 py-4 rounded-full font-semibold text-sm tracking-[0.02em] inline-flex items-center justify-center gap-2.5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
        >
          <span>{secondaryButton.label}</span>
          <ArrowUpRightIcon width={16} height={16} strokeWidth={2.5} />
        </motion.button>
      </Link>
    </motion.div>
  );
}
