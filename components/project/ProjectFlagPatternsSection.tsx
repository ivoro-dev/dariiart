"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PatternCardProps = {
  title: string;
  imageSrc: string;
  delay?: number;
};

const patterns: PatternCardProps[] = [
  {
    title: "Europe",
    imageSrc: "/images/europe.png",
    delay: 0,
  },
  {
    title: "Asia",
    imageSrc: "/images/asia.png",
    delay: 0.1,
  },
  {
    title: "Africa",
    imageSrc: "/images/africa.png",
    delay: 0.2,
  },
  {
    title: "America",
    imageSrc: "/images/america.png",
    delay: 0.3,
  },
];

export default function ProjectFlagPatternsSection() {
  const textContent =
    "The movement of national flags was translated into abstract graphic patterns, creating a visual language that adapts to each country while remaining part of one cohesive identity system.";

  return (
    <section className="w-full bg-white px-6 sm:px-12 md:px-16 py-12 sm:py-20 flex justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-8 sm:gap-12 md:gap-14">
        {/* Top Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[400px]"
        >
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-black/90 leading-[1.2] tracking-tight">
            {textContent}
          </p>
        </motion.div>

        {/* 2x2 Grid of Bordered Pattern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full">
          {patterns.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: item.delay }}
              className="w-full flex flex-col border border-black/30 bg-white"
            >
              {/* Image Frame */}
              <div className="w-full relative aspect-square bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={`${item.title} pattern design`}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>

              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
