"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { processData } from "@/lib/data/process";
import { ProcessHeader } from "./ProcessHeader";
import { ProcessTimeline } from "./ProcessTimeline";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-12%" });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F7F6F4] relative py-20 sm:py-28 md:py-36 px-6 sm:px-12 md:px-16 overflow-hidden box-border"
    >

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
        {/* Left Column - Section Header */}
        <div className="w-full lg:w-[38%] shrink-0 pt-4">
          <ProcessHeader
            eyebrow={processData.eyebrow}
            title={processData.title}
            description={processData.description}
            buttonText={processData.buttonText}
            buttonHref={processData.buttonHref}
            isInView={isInView}
          />
        </div>

        {/* Right Column - Process Timeline */}
        <div className="w-full lg:w-[62%] shrink-0">
          <ProcessTimeline steps={processData.steps} isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
