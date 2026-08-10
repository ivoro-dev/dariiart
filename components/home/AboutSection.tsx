"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const KNOW_MORE_LABEL = "Know more";

const desktopLines = [
  null,
  "concept-led identities, art direction, and digital experiences",
  "by uncovering rather than inventing.",
];

const mobileLines = [
  null,
  "+ Graphic Designer creating",
  "concept-led identities, art direction,",
  "and digital experiences by uncovering rather than inventing.",
];

const lineVariants = {
  hidden: { y: "110%", opacity: 1 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.68,
      delay: 0.08 + i * 0.11,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  }),
};

const videoVariants = {
  hidden: { y: 72, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, delay: 0.5, ease: [0.33, 1, 0.68, 1] as const },
  },
};

function HeadingLine({
  children,
  index,
  isInView,
}: {
  children: React.ReactNode;
  index: number;
  isInView: boolean;
}) {
  return (
    <div className="overflow-hidden block">
      <motion.div
        custom={index}
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="font-normal leading-[1.65] text-black m-0 text-[clamp(17px,4.8vw,22px)] sm:text-[clamp(18px,2.4vw,26px)]"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function AboutSection() {
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="min-h-dvh w-full bg-[#F7F6F4] flex flex-col items-center box-border
                 pt-[88px] px-5 pb-8 gap-12 justify-start
                 sm:pt-[100px] sm:px-6 sm:pb-12 sm:gap-10 sm:justify-center"
    >
      {/* Heading */}
      <div className="max-w-[780px] w-full text-center">
        {/* Line 1 */}
        <HeadingLine index={0} isInView={isInView}>
          <span className="block">
            Independent{" "}
            <span className="inline-block align-middle relative -top-0.5 mx-1">
              <Image
                src="/assets/art-director.png"
                alt="Art Director"
                width={160}
                height={36}
                className="h-[clamp(22px,2.6vw,34px)] w-auto object-contain block"
                priority
              />
            </span>{" "}
            <span className="hidden sm:inline">+ Graphic Designer creating</span>
          </span>
        </HeadingLine>

        {/* Desktop lines 2 & 3 */}
        {desktopLines.slice(1).map((text, i) => (
          <div key={i} className="hidden sm:block">
            <HeadingLine index={i + 1} isInView={isInView}>{text}</HeadingLine>
          </div>
        ))}

        {/* Mobile lines 2, 3 & 4 */}
        {mobileLines.slice(1).map((text, i) => (
          <div key={i} className="block sm:hidden">
            <HeadingLine index={i + 1} isInView={isInView}>{text}</HeadingLine>
          </div>
        ))}
      </div>

      {/* Video */}
      <motion.div
        variants={videoVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative overflow-hidden w-full
                   h-[calc(100dvh-340px)] min-h-[180px]
                   sm:aspect-video sm:h-auto sm:max-w-[900px] sm:flex-shrink-0"
      >
        <video
          src={isInView ? "/assets/about-video.mp4" : undefined}
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover block"
        />
      </motion.div>

      {/* Know more link */}
      <div className="w-full max-w-[900px] flex justify-end flex-shrink-0">
        <Link
          href="/about"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-flex items-center gap-1.5 no-underline relative text-black"
        >
          {/* Text reveal mask */}
          <span className="overflow-hidden inline-block h-[1.2em] leading-[1.2]">
            <motion.span
              animate={{ y: hovered ? "-50%" : "0%" }}
              transition={{ duration: 0.32, ease: [0.33, 1, 0.68, 1] }}
              className="block"
            >
              <span className="text-[14px] font-semibold tracking-[0.04em] uppercase block h-[1.2em] leading-[1.2]">
                {KNOW_MORE_LABEL}
              </span>
              <span aria-hidden className="text-[14px] font-semibold tracking-[0.04em] uppercase block h-[1.2em] leading-[1.2]">
                {KNOW_MORE_LABEL}
              </span>
            </motion.span>
          </span>

          {/* Arrow icon */}
          <motion.span
            animate={{ rotate: hovered ? 0 : 45, y: hovered ? -2 : 0 }}
            transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
            className="flex items-center"
          >
            <ArrowUpRightIcon width={16} height={16} strokeWidth={2.5} />
          </motion.span>

          {/* Underline — scaleX is JS-driven, keep as motion prop; color + origin are Tailwind */}
          <motion.span
            animate={{ scaleX: hovered ? 1 : 0 }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.32, ease: [0.33, 1, 0.68, 1] }}
            className="absolute -bottom-0.5 left-0 right-0 h-px bg-black origin-left block"
          />
        </Link>
      </div>
    </section>
  );
}
