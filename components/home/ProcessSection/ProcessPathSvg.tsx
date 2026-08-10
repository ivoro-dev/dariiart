"use client";

import { motion } from "framer-motion";

interface ProcessPathSvgProps {
  isInView: boolean;
}

export function ProcessPathSvg({ isInView }: ProcessPathSvgProps) {
  // SVG path connecting node 1, node 2, node 3
  // viewBox: 0 0 1000 450
  // Node 1 approx: (170, 320)
  // Node 2 approx: (480, 235)
  // Node 3 approx: (760, 80)
  const pathD =
    "M 15 260 C 70 300, 110 320, 170 320 C 270 320, 360 250, 480 235 C 580 220, 680 110, 760 80 C 785 70, 805 78, 830 80";

  return (
    <svg
      viewBox="0 0 1000 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full absolute inset-0 overflow-visible pointer-events-none"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Soft coral drop shadow filter */}
        <filter id="coralShadow" x="-10%" y="-20%" width="130%" height="160%">
          <feDropShadow
            dx="0"
            dy="14"
            stdDeviation="10"
            floodColor="#FF6B53"
            floodOpacity="0.35"
          />
        </filter>
      </defs>

      {/* Main Curved Coral Path Line */}
      <motion.path
        d={pathD}
        stroke="#FF6B53"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#coralShadow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          isInView
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{
          pathLength: { duration: 1.8, ease: [0.65, 0, 0.35, 1], delay: 0.2 },
          opacity: { duration: 0.3, delay: 0.2 },
        }}
      />
    </svg>
  );
}
