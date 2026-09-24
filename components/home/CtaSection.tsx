"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ctaData } from "@/lib/data/cta";

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F7F6F4] px-4 sm:px-8 md:px-16 pt-8 pb-24 sm:pb-32 box-border flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="relative w-full max-w-6xl min-h-[380px] sm:min-h-[460px] md:min-h-[520px] flex items-center justify-center p-8 sm:p-14 md:p-20"
      >
        <Image
          src="/images/cta-bg.png"
          alt="CTA Background Frame"
          fill
          className="object-fill pointer-events-none select-none"
          priority
        />

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl my-auto">
          {/* Header & Subheading */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10">
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

            <div className="overflow-hidden px-4">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                className="text-[clamp(14px,1.4vw,18px)] font-normal leading-[1.6] text-white/80 max-w-[620px] m-0"
              >
                {ctaData.subheading}
              </motion.p>
            </div>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto"
          >
            <Link href={ctaData.primaryButton.href} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-[#f4eaca] text-black px-3 py-2 rounded-lg font-semibold text-sm sm:text-[15px] tracking-[-0.01em] transition-all duration-300 cursor-pointer shadow-sm hover:bg-[#FFFDF5]"
              >
                {ctaData.primaryButton.label}
              </motion.button>
            </Link>

            <Link href={ctaData.secondaryButton.href} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-transparent border-2 border-white/40 hover:border-white text-white px-5 py-2 rounded-lg font-semibold text-sm sm:text-[15px] tracking-[-0.01em] transition-all duration-300 cursor-pointer"
              >
                {ctaData.secondaryButton.label}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
