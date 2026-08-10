"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ctaData } from "@/lib/data/cta";
import { CtaContent } from "./CtaContent";
import { CtaButtons } from "./CtaButtons";

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F7F6F4] px-6 sm:px-12 md:px-16 pt-8 pb-24 sm:pb-32 box-border"
    >
      <div className="max-w-7xl mx-auto bg-[#111111] text-white rounded-[32px] sm:rounded-[44px] px-6 sm:px-16 py-16 sm:py-24 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
        {/* Soft Ambient Glow inside card */}
        <div
          className="absolute -right-20 -top-20 w-[400px] h-[400px] bg-white/[0.04] rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -left-20 -bottom-20 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center">
          <CtaContent
            heading={ctaData.heading}
            subheading={ctaData.subheading}
            isInView={isInView}
          />
          <CtaButtons
            primaryButton={ctaData.primaryButton}
            secondaryButton={ctaData.secondaryButton}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
}
