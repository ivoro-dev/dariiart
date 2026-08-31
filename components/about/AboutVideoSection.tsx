"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { aboutVideoData } from "@/lib/data/about";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Video scale animation 0 -> 1 (0 to 100%)
const videoScaleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.85,
      delay: 0.1,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

// Left image container expansion from bottom to top (slow to fast easeIn curve)
const leftContainerExpandVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.95,
      delay: 0.05,
      ease: [0.55, 0, 1, 0.45] as const, // slow-to-fast acceleration curve
    },
  },
};

const bottomRowVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.4,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  },
};

export default function AboutVideoSection() {
  const {
    videoSrc,
    verticalImageSrc,
    verticalImageAlt,
    practiceText,
    ctaText,
    ctaHref,
  } = aboutVideoData;

  return (
    <section className="w-full bg-[#F7F6F4] pb-16 sm:pb-24 lg:pb-32 px-5 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col gap-8 sm:gap-10 lg:gap-14 w-full"
        >
          {/* Top Row: Left Vertical Image + Main Video Container */}
          <div className="flex items-stretch gap-2 sm:gap-4 lg:gap-6 w-full max-w-[960px] mx-auto">
            {/* Left Vertical Image Container - Expands from Bottom to Top (Slow to Fast) */}
            <motion.div
              variants={leftContainerExpandVariants}
              style={{ transformOrigin: "bottom" }}
              className="relative w-6 sm:w-8 md:w-10 lg:w-12 shrink-0 flex items-center justify-center select-none overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                  src={verticalImageSrc}
                  alt={verticalImageAlt}
                  className="h-4.5 sm:h-6.5 md:h-8 lg:h-10 w-auto max-w-none -rotate-90 origin-center object-contain block"
                />
              </div>
            </motion.div>

            {/* Video Container - Scaling from 0 to 100 */}
            <motion.div
              variants={videoScaleVariants}
              style={{ transformOrigin: "center" }}
              className="flex-1 relative overflow-hidden bg-black/5 rounded-sm sm:rounded-md aspect-video sm:aspect-[16/9]"
            >
              <video
                src={videoSrc}
                autoPlay
                muted
                playsInline
                loop
                preload="auto"
                className="w-full h-full object-cover block"
              />
            </motion.div>
          </div>

          {/* Bottom Row: Practice Description Text (Far Left) & See my work Link (Far Right) */}
          <motion.div
            variants={bottomRowVariants}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 w-full pt-2"
          >
            {/* Left Practice Text */}
            <div className="max-w-[460px]">
              <p className="text-[15px] sm:text-[17px] lg:text-[19px] font-normal leading-tight text-black m-0">
                {practiceText}
              </p>
            </div>

            {/* Right See My Work CTA */}
            <div className="flex justify-start sm:justify-end shrink-0">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2 text-[15px] sm:text-[17px] font-medium text-black no-underline transition-colors hover:text-black/70"
              >
                <span>{ctaText}</span>
                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
