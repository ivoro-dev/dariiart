"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { aboutHeroData } from "@/lib/data/about";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  },
};

const artDirectorVariants = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: 0.25,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  },
};

const lineVariants = {
  hidden: { y: "110%", opacity: 1 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.35 + i * 0.1,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  }),
};

// Exact 5 lines matching user's target design reference
const descriptionLines = [
  "I collaborate with cultural organisations, creative",
  "businesses, arts organisations and purpose-driven",
  "brands to uncover what makes them distinctive and",
  "translate it into compelling visual identities,",
  "campaigns and experiences.",
];

export default function AboutHeroSection() {
  const {
    title,
    subtitlePre,
    artDirectorImage,
    subtitlePost,
    labels,
  } = aboutHeroData;

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  // Scroll driven fade-out animation for heading
  const { scrollY } = useScroll();
  const headingScrollOpacity = useTransform(scrollY, [0, 220], [1, 0]);
  const headingScrollY = useTransform(scrollY, [0, 220], [0, -25]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F7F6F4] pt-[70px] sm:pt-[100px] lg:pt-[140px] pb-16 sm:pb-24 lg:pb-28 px-5 sm:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-start"
        >
          {/* Main content wrapper with desktop left offset */}
          <div className="w-full lg:pl-30">
            {/* Main Page Title with Fade Out Scroll Animation */}
            <motion.h1
              variants={itemVariants}
              style={{ opacity: headingScrollOpacity, y: headingScrollY }}
              className="text-[40px] xs:text-[48px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-extrabold tracking-tight leading-[1.05] text-black mb-2"
            >
              {title}
            </motion.h1>

            {/* Subtitle with Inline Art Director Image Translation from Bottom */}
            <motion.div
              variants={itemVariants}
              className="max-w-[900px] text-[22px] xs:text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.22] text-black tracking-tight mb-1 sm:mb-2"
            >
              <span>{subtitlePre}</span>
              <span className="inline-block overflow-hidden align-middle relative -top-[0.06em] mx-[0.15em]">
                <motion.span
                  variants={artDirectorVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="inline-block"
                >
                  <Image
                    src={artDirectorImage.src}
                    alt={artDirectorImage.alt}
                    width={artDirectorImage.width}
                    height={artDirectorImage.height}
                    className="h-[1.05em] w-auto object-contain inline-block"
                    priority
                  />
                </motion.span>
              </span>
              <span>{subtitlePost}</span>
            </motion.div>

            {/* Label Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2 sm:gap-3.5"
            >
              {labels.map((label) => (
                <span
                  key={label}
                  className="bg-[#FAF0E4] text-black text-[14px] sm:text-[18px] lg:text-[22px] font-normal px-3 py-1.5 sm:px-4 sm:py-2 rounded-md leading-tight select-none"
                >
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Description Text - Staggered Bottom-to-Top Line Translation */}
          <div className="mt-10 sm:mt-14 lg:mt-18 max-w-[620px]">
            {descriptionLines.map((line, i) => (
              <div key={i} className="overflow-hidden block">
                <motion.p
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-[16px] sm:text-[20px] lg:text-[24px] font-medium leading-tight text-black/90 tracking-normal m-0 block sm:whitespace-nowrap"
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
