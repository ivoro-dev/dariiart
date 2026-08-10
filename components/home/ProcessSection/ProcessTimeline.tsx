"use client";

import type { ProcessStep } from "@/lib/data/process";
import { ProcessPathSvg } from "./ProcessPathSvg";
import { ProcessStepNode } from "./ProcessStepNode";
import { ProcessStepCard } from "./ProcessStepCard";

interface ProcessTimelineProps {
  steps: ProcessStep[];
  isInView: boolean;
}

export function ProcessTimeline({ steps, isInView }: ProcessTimelineProps) {
  return (
    <div className="w-full relative min-h-[420px] lg:min-h-[500px] flex items-center">
      {/* Background Soft Blue/Indigo Accent Glow Circle (Right Side) */}
      <div
        className="absolute -right-16 top-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full bg-[#EFF4FF] blur-3xl pointer-events-none opacity-80 z-0"
        aria-hidden="true"
      />

      {/* DESKTOP LAYOUT (lg screens and up) */}
      <div className="hidden lg:block w-full h-[520px] relative z-10">
        {/* SVG Path Curve */}
        <ProcessPathSvg isInView={isInView} />

        {/* Nodes & Step Cards Overlay */}
        {steps.map((step, index) => {
          // Node & Card Position Mapping
          const positions = [
            { nodeLeft: "17%", nodeTop: "71%", cardLeft: "17%", cardTop: "80%" },
            { nodeLeft: "48%", nodeTop: "52%", cardLeft: "48%", cardTop: "61%" },
            { nodeLeft: "76%", nodeTop: "17.5%", cardLeft: "76%", cardTop: "26.5%" },
          ];
          const pos = positions[index] || positions[0];

          return (
            <div key={step.id}>
              {/* Node Marker sitting directly on SVG Curve */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: pos.nodeLeft, top: pos.nodeTop }}
              >
                <ProcessStepNode
                  isInView={isInView}
                  delay={0.4 + index * 0.25}
                />
              </div>

              {/* Step Detail Card */}
              <div
                className="absolute"
                style={{ left: pos.cardLeft, top: pos.cardTop }}
              >
                <ProcessStepCard
                  step={step}
                  isInView={isInView}
                  delay={0.5 + index * 0.25}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* MOBILE & TABLET LAYOUT (< lg screens) */}
      <div className="block lg:hidden w-full relative z-10 py-4">
        {/* Vertical line running through the center of node markers */}
        <div className="absolute left-[20px] sm:left-[22px] top-6 bottom-6 w-[2px] bg-[#FF6B53]/40 z-0 pointer-events-none" />

        <div className="flex flex-col gap-10 sm:gap-12 relative z-10">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start gap-5 sm:gap-6">
              {/* Node Marker Column (width matches line center) */}
              <div className="shrink-0 w-10 sm:w-11 flex items-center justify-center pt-0.5">
                <ProcessStepNode
                  isInView={isInView}
                  delay={0.3 + index * 0.2}
                />
              </div>

              {/* Step Card Column */}
              <div className="flex-1 pt-0.5 min-w-0">
                <ProcessStepCard
                  step={step}
                  isInView={isInView}
                  delay={0.4 + index * 0.2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
