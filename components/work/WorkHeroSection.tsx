"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WorkHeroSection() {
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    const isDone =
      typeof window !== "undefined" &&
      Boolean((window as Window & { __preloaderDone?: boolean }).__preloaderDone);

    if (isDone) {
      setStartAnim(true);
    } else {
      const handleDone = () => setStartAnim(true);
      window.addEventListener("preloader:done", handleDone, { once: true });
      const timer = setTimeout(() => setStartAnim(true), 2500);

      return () => {
        window.removeEventListener("preloader:done", handleDone);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <section className="w-full bg-[#F7F6F4] px-10 md:px-26 pt-28 md:pt-36 pb-24 md:pb-24 box-border">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* 1. Heading (Appears from bottom) */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "120%", opacity: 0 }}
            animate={
              startAnim
                ? { y: "0%", opacity: 1 }
                : { y: "120%", opacity: 0 }
            }
            transition={{
              duration: 0.85,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.25,
            }}
            className="text-[clamp(30px,6.5vw,78px)] font-bold text-black leading-none tracking-[-0.02em] m-0 inline-block"
          >
            Projects
          </motion.h1>
        </div>

        {/* 2. Description (Fades in & slides up) */}
        <div className="overflow-hidden mb-4">
          <motion.p
            initial={{ opacity: 0, y: "35px" }}
            animate={
              startAnim
                ? { opacity: 1, y: "0px" }
                : { opacity: 0, y: "35px" }
            }
            transition={{
              duration: 0.8,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.45,
            }}
            className="text-[clamp(18px,2vw,24px)] font-normal leading-[1.35] text-black max-w-[50ch] m-0"
          >
            A selection of projects exploring identity, art direction, digital experiences and visual storytelling from cultural organisations and independent brands to creative campaigns.
          </motion.p>
        </div>

        {/* 3. Phrase Image (Width 0 to 100 slow to fast) */}
        <motion.div
          initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }}
          animate={
            startAnim
              ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
              : { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }
          }
          transition={{
            duration: 1.0,
            ease: [0.7, 0, 0.84, 0],
            delay: 0.7,
          }}
          className="relative pt-2"
        >
          <Image
            src="/images/darria_pharase.png"
            alt="Build to evolve, not follow trends."
            width={580}
            height={90}
            className="w-[300px] sm:w-[420px] md:w-[500px] h-auto object-contain select-none pointer-events-none"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
