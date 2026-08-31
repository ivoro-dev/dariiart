"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto"
    >
      {/* Primary Button - Start a conversation */}
      <Link href={primaryButton.href} className="w-full sm:w-auto">
        <motion.button
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="w-full sm:w-auto bg-[#f4eaca] text-black px-3 py-2 rounded-lg font-semibold text-sm sm:text-[15px] tracking-[-0.01em] transition-all duration-300 cursor-pointer shadow-sm hover:bg-[#FFFDF5]"
        >
          {primaryButton.label}
        </motion.button>
      </Link>

      {/* Secondary Button - View my work */}
      <Link href={secondaryButton.href} className="w-full sm:w-auto">
        <motion.button
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="w-full sm:w-auto bg-transparent border-2 border-white/40 hover:border-white text-white px-5 py-2 rounded-lg font-semibold text-sm sm:text-[15px] tracking-[-0.01em] transition-all duration-300 cursor-pointer"
        >
          {secondaryButton.label}
        </motion.button>
      </Link>
    </motion.div>
  );
}
