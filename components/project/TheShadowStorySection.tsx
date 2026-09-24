"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function TheShadowStorySection() {
  const topTextRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);

  const isTopInView = useInView(topTextRef, { once: true, margin: "-10%" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-10%" });
  const isBottomInView = useInView(bottomTextRef, { once: true, margin: "-10%" });

  return (
    <section className="w-full bg-white px-6 sm:px-12 md:px-16 py-6 sm:py-12 flex flex-col justify-center box-border">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 sm:gap-24">
        
        {/* 1. Upper Text Block (Pic 1) */}
        <div ref={topTextRef} className="flex flex-col w-full">
          {/* Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTopInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[620px] mb-4"
          >
            <p className="text-[clamp(14px,1.7vw,18px)] font-medium text-black leading-[1.2] tracking-tight whitespace-pre-line">
              {"I developed the film from storyboard to final\nexecution, maintaining control over the visual\nidentity and conceptual direction while\ncollaborating with a small team to bring the\nidea to life."}
            </p>
          </motion.div>

          {/* Indented Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTopInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="max-w-[480px] ml-[10%] sm:ml-[12%] md:ml-[20%]"
          >
            <p className="text-[clamp(14px,1.4vw,16px)] font-bold text-black/85 leading-[1.25] whitespace-pre-line">
              {'"What if we stopped seeing the shadow as something\nbehind us and started seeing it as part of us?"'}
            </p>
          </motion.div>
        </div>

        {/* 2. Image: script.png */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative overflow-hidden group"
        >
          <Image
            src="/projects/the-shadow/script.png"
            alt="The Shadow Script & Storyboard Visual"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </motion.div>

        {/* 3. Lower Text Block (Pic 2) */}
        <div ref={bottomTextRef} className="flex flex-col gap-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[620px]"
          >
            <p className="text-[clamp(14px,1.7vw,18px)] font-medium text-black leading-[1.2] tracking-tight whitespace-pre-line">
              {"I translated the idea of the shadow as an inner\nself into a physical relationship between a\nperson and their shadow."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="max-w-[620px]"
          >
            <p className="text-[clamp(14px,1.7vw,18px)] font-medium text-black leading-[1.2] tracking-tight whitespace-pre-line">
              {"The film gradually explores this relationship\nthrough light, darkness, distance, movement\nand physical interaction, allowing the shadow\nto become almost like another character."}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
