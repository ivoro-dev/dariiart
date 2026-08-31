"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CtaContentProps {
  subheading: string;
  isInView: boolean;
}

export function CtaContent({ subheading, isInView }: CtaContentProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10">
      {/* Heading Image */}
      <div className="overflow-hidden mb-3 sm:mb-4 px-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
          className="w-full max-w-[540px] sm:max-w-[650px] md:max-w-[760px]"
        >
          <Image
            src="/images/cta-head.png"
            alt="Let's uncover something meaningful."
            width={1280}
            height={200}
            className="w-full h-auto object-contain block mx-auto"
            priority
          />
        </motion.div>
      </div>

      {/* Subheading */}
      <div className="overflow-hidden px-4">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
          className="text-[clamp(14px,1.4vw,18px)] font-normal leading-[1.6] text-white/80 max-w-[620px] m-0"
        >
          {subheading}
        </motion.p>
      </div>
    </div>
  );
}
