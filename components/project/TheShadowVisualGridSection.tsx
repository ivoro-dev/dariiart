"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function TheShadowVisualGridSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const images = [
    { src: "/projects/the-shadow/row-1.jpg", alt: "The Shadow Visual 1" },
    { src: "/projects/the-shadow/row-2.jpg", alt: "The Shadow Visual 2" },
    { src: "/projects/the-shadow/row-3.jpg", alt: "The Shadow Visual 3" },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full bg-white px-6 sm:px-12 md:px-16 py-4 sm:py-6 flex flex-col justify-center box-border"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-4 sm:gap-8">
        {/* 3 Images in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full items-start">
          {images.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
              className="w-full relative overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1000}
                height={1500}
                className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>

        {/* Text below left aligned fully */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="max-w-[620px] w-full"
        >
          <p className="text-[clamp(14px,1.7vw,18px)] font-medium text-black leading-[1.2] tracking-tight whitespace-pre-line">
            {"Visually, the film moves between isolation and\nconnection, creating a sense of confrontation,\ncuriosity and eventual acceptance."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
