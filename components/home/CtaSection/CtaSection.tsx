"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ctaData } from "@/lib/data/cta";
import { CtaContent } from "./CtaContent";
import { CtaButtons } from "./CtaButtons";

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
        {/* Scalloped Hand-drawn Background Frame */}
        <Image
          src="/images/cta-bg.png"
          alt="CTA Background Frame"
          fill
          className="object-fill pointer-events-none select-none"
          priority
        />

        {/* Content overlaid inside the frame */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl my-auto">
          <CtaContent
            subheading={ctaData.subheading}
            isInView={isInView}
          />
          <CtaButtons
            primaryButton={ctaData.primaryButton}
            secondaryButton={ctaData.secondaryButton}
            isInView={isInView}
          />
        </div>
      </motion.div>
    </section>
  );
}
