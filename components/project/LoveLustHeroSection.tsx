"use client";

import { motion } from "framer-motion";

export default function LoveLustHeroSection() {
  const labels = ["VISUAL CONSULTING", "CONCEPTUAL THINKING"];
  const heroSubtitle =
    "Helping a photographer sharpen the visual\ndirection for his fine-art exhibition concept.";
  const paragraph1 =
    "Shivam Aggarwal came to me with a concept\nfor his exhibition two people from different\nworlds finding each other, styled through a\nJapanese aesthetic.";
  const paragraph2 =
    "My role was to help bring clarity to his visual\nsolution: shaping how the narrative reads\nthrough image and keeping the story's\nemotional weight intact. Sharpening an\nalready-strong idea, not reinventing it.";
  const quoteText = '"Every shot tells a story."';

  return (
    <section className="w-full min-h-0 sm:min-h-[100dvh] bg-[#f8f7f5] px-4 sm:px-12 md:px-16 pt-20 sm:pt-28 md:pt-32 pb-6 sm:pb-16 flex flex-col gap-8 sm:gap-0 sm:justify-between box-border">
      <div className="max-w-7xl mx-auto flex flex-col justify-center w-full my-auto">
        {/* Top Content: Title, Hero Subtitle & Labels (Padded significantly more from left) */}
        <div className="pl-0 sm:pl-12 md:pl-28 lg:pl-32">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 sm:mb-5"
          >
            <h1 className="text-[clamp(34px,6.8vw,80px)] font-bold tracking-[-0.03em] uppercase text-black leading-[0.95]">
              LOVE, LUST AND VIOLENCE
            </h1>
          </motion.div>

          {/* Subtitle / Lead Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="max-w-[700px] mb-8 sm:mb-10"
          >
            <p className="text-[clamp(18px,2.2vw,28px)] font-semibold text-black leading-[1.25] tracking-tight sm:whitespace-pre-line">
              {heroSubtitle}
            </p>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            className="flex items-center gap-2.5 flex-wrap mb-8"
          >
            {labels.map((label) => (
              <span
                key={label}
                className="px-2.5 py-1 text-[11px] sm:text-[12px] font-semibold tracking-wider text-black/85 border border-[#D0DBEA] rounded-md uppercase bg-white whitespace-nowrap shadow-2xs"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Narrative Paragraphs & Quote Section (Left aligned with standard container padding) */}
        <div className="flex flex-col w-full">
          {/* Narrative Paragraphs */}
          <div className="flex flex-col w-full max-w-[460px] gap-5">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
            >
              <p className="text-[clamp(14px,1.45vw,16px)] font-medium text-black/90 leading-[1.2] sm:whitespace-pre-line">
                {paragraph1}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
            >
              <p className="text-[clamp(14px,1.45vw,16px)] font-medium text-black/90 leading-[1.2] sm:whitespace-pre-line">
                {paragraph2}
              </p>
            </motion.div>
          </div>

          {/* Indented Quote */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.52 }}
            className="max-w-[360px] ml-[4%] sm:ml-[12%] md:ml-[16%] mt-6"
          >
            <p className="text-[clamp(14px,1.4vw,17px)] font-bold text-black leading-[1.25]">
              {quoteText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
