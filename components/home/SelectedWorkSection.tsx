"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { projects, type Project } from "@/lib/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });

  const [hovered, setHovered] = useState(false);

  // Mouse tracking for zoom effect
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const originX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const originY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageWrapperRef.current) return;
    const rect = imageWrapperRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const isEven = index % 2 === 0;

  // Even indices (0, 2) reveal Top -> Bottom
  // Odd indices (1, 3) reveal Bottom -> Top
  const clipInitial = isEven ? "inset(0% 0% 100% 0%)" : "inset(100% 0% 0% 0%)";
  const clipAnimate = "inset(0% 0% 0% 0%)";

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row items-start gap-10 md:gap-20 w-full ${
        !isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image (40% width on desktop) */}
      <div className="w-full md:w-[40%] shrink-0">
        <motion.div
          initial={{ clipPath: clipInitial }}
          animate={isInView ? { clipPath: clipAnimate } : { clipPath: clipInitial }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="relative w-full aspect-square border border-black/10 overflow-hidden bg-[#E5E4E2]"
          ref={imageWrapperRef}
          onMouseEnter={() => setHovered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: hovered ? 1.6 : (isInView ? 1 : 1.2) }}
            transition={{
              duration: hovered ? 0.6 : 1.2,
              ease: hovered ? "easeOut" : [0.76, 0, 0.24, 1],
            }}
            style={{ originX, originY }}
            className="w-full h-full relative"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Content (60% width on desktop) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
        className="w-full md:w-[60%] flex flex-col items-start"
      >
        <h3 className="text-[clamp(28px,4vw,48px)] font-bold text-black uppercase leading-none tracking-[-0.02em] mb-4 ">
          {project.title}
        </h3>
        
        <p className="text-[clamp(16px,1.5vw,20px)] font-normal leading-[1.5] text-black/80 max-w-[500px] mb-2">
          {project.description}
        </p>

        {/* Labels */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          {project.labels.map((label) => (
            <span
              key={label}
              className="px-3 py-1 md:px-4 md:py-1.5 border border-black/50 rounded-sm text-[10px] md:text-xs font-semibold tracking-[0.06em] uppercase text-black/70"
            >
              {label}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function ViewMoreLink() {
  const [hovered, setHovered] = useState(false);
  const LABEL = "View more";

  return (
    <div className="w-full flex justify-center mt-24 md:mt-32">
      <Link
        href="/work"
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
              {LABEL}
            </span>
            <span aria-hidden className="text-[14px] font-semibold tracking-[0.04em] uppercase block h-[1.2em] leading-[1.2]">
              {LABEL}
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

        {/* Underline */}
        <motion.span
          animate={{ scaleX: hovered ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.32, ease: [0.33, 1, 0.68, 1] }}
          className="absolute -bottom-0.5 left-0 right-0 h-px bg-black origin-left block"
        />
      </Link>
    </div>
  );
}

export default function SelectedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-12%" });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F7F6F4] px-16 pt-[120px] pb-32 box-border max-sm:px-6 max-sm:pt-20 max-sm:pb-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Header Section */}
        <div className="flex flex-col gap-4 mb-24 md:mb-32">
          {/* Heading */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              animate={isInView ? { y: "0%" } : { y: "110%" }}
              transition={{
                duration: 0.7,
                ease: [0.33, 1, 0.68, 1] as const,
                delay: 0.05,
              }}
              className="text-[clamp(32px,5vw,56px)] font-medium uppercase tracking-[-0.01em] leading-none text-black m-0"
            >
              Projects that
              <br />
              speak for themselves.
            </motion.h2>
          </div>

          {/* Subheading */}
          <div className="overflow-hidden mt-2">
            <motion.p
              initial={{ y: "110%" }}
              animate={isInView ? { y: "0%" } : { y: "110%" }}
              transition={{
                duration: 0.65,
                ease: [0.33, 1, 0.68, 1] as const,
                delay: 0.13,
              }}
              className="text-[clamp(15px,1.4vw,18px)] font-normal leading-[1.65] text-black/55 m-0 max-w-125"
            >
              A selection of creative projects where strategy, visual identity,
              and artistic expression come together to tell a clear story.
            </motion.p>
          </div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* View More Link */}
        <ViewMoreLink />
      </div>
    </section>
  );
}
