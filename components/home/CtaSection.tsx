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
      className="w-full bg-[#f8f7f5] px-4 sm:px-8 md:px-16 pt-8 pb-20 sm:pb-32 box-border flex justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="relative w-full aspect-[16/11] xs:aspect-[16/10] sm:aspect-auto sm:min-h-[460px] md:min-h-[520px] flex items-center justify-center p-3 xs:p-5 sm:p-14 md:p-20"
      >
        <Image
          src="/images/cta-bg.png"
          alt="CTA Background Frame"
          fill
          className="object-fill pointer-events-none select-none"
          priority
        />

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl my-auto text-center px-2 sm:px-6">
          {/* Header & Subheading */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-2 xs:mb-3 sm:mb-8">
            <div className="overflow-hidden mb-1 sm:mb-4 px-1">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                className="w-[82%] max-w-[240px] xs:max-w-[290px] sm:max-w-[650px] md:max-w-[760px] mx-auto"
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

            <div className="overflow-hidden px-1">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                className="text-[11px] xs:text-[13px] sm:text-[16px] md:text-[18px] font-normal leading-[1.3] text-white/90 max-w-[240px] xs:max-w-[290px] sm:max-w-[620px] mx-auto m-0"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4 w-[75%] xs:w-[80%] max-w-[200px] xs:max-w-[230px] sm:max-w-md mx-auto"
          >
            <Link href={ctaData.primaryButton.href} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-[#f4eaca] text-black px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md sm:rounded-lg font-semibold text-[11px] xs:text-xs sm:text-[15px] tracking-[-0.01em] transition-all duration-300 cursor-pointer shadow-sm hover:bg-[#FFFDF5]"
              >
                {ctaData.primaryButton.label}
              </motion.button>
            </Link>

            <Link href={ctaData.secondaryButton.href} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-transparent border border-white/40 hover:border-white text-white px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md sm:rounded-lg font-semibold text-[11px] xs:text-xs sm:text-[15px] tracking-[-0.01em] transition-all duration-300 cursor-pointer"
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
