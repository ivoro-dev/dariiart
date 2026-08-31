"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { contactHeroData } from "@/lib/data/contact";

export default function ContactHeroSection() {
  const [startAnim, setStartAnim] = useState(false);

  // Scroll-driven fade out & upward translation for heading
  const { scrollY } = useScroll();
  const headingScrollOpacity = useTransform(scrollY, [0, 240], [1, 0]);
  const headingScrollY = useTransform(scrollY, [0, 240], [0, -28]);

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
    <section className="w-full  bg-[#F7F6F4] pt-[80px] sm:pt-[100px] lg:pt-[130px] pb-10 md:pb-20 px-5 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Top Header Block - Padded on Left Side with Scroll-Driven Fade */}
        <motion.div
          style={{ opacity: headingScrollOpacity, y: headingScrollY }}
          className="w-full pl-6 sm:pl-16 md:pl-28 lg:pl-36"
        >
          {/* Hand-drawn Script Heading Image */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "115%", opacity: 0 }}
              animate={
                startAnim
                  ? { y: "0%", opacity: 1 }
                  : { y: "115%", opacity: 0 }
              }
              transition={{
                duration: 0.85,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.2,
              }}
            >
              <Image
                src={contactHeroData.headingImage.src}
                alt={contactHeroData.headingImage.alt}
                width={contactHeroData.headingImage.width}
                height={contactHeroData.headingImage.height}
                className="w-[280px] xs:w-[360px] sm:w-[500px] md:w-[620px] lg:w-[720px] h-auto object-contain block select-none pointer-events-none"
                priority
              />
            </motion.div>
          </div>

          {/* Subtitle directly below image */}
          <div className="overflow-hidden pl-20">
            <motion.p
              initial={{ y: "115%", opacity: 0 }}
              animate={
                startAnim
                  ? { y: "0%", opacity: 1 }
                  : { y: "115%", opacity: 0 }
              }
              transition={{
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.35,
              }}
              className="text-[20px] xs:text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-normal leading-[1.2] text-black  tracking-tight m-0"
            >
              {contactHeroData.subtitle}
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom Content Paragraphs - Unpadded (Aligned to container left edge) */}
        <div className="w-full mt-16 sm:mt-24 lg:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 w-full">
            {/* Left Column Paragraph */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 32, opacity: 0 }}
                animate={
                  startAnim
                    ? { y: 0, opacity: 1 }
                    : { y: 32, opacity: 0 }
                }
                transition={{
                  duration: 0.75,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.55,
                }}
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-normal leading-tight text-black/90 tracking-normal m-0 max-w-[480px]"
              >
                {contactHeroData.leftParagraph}
              </motion.p>
            </div>

            {/* Right Column Paragraph */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 32, opacity: 0 }}
                animate={
                  startAnim
                    ? { y: 0, opacity: 1 }
                    : { y: 32, opacity: 0 }
                }
                transition={{
                  duration: 0.75,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.65,
                }}
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-normal leading-tight text-black/90 tracking-normal m-0 max-w-[480px]"
              >
                {contactHeroData.rightParagraph}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
