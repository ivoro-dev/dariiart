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
      typeof window !== "undefined" && Boolean(window.__preloaderDone);

    if (isDone) {
      const timer = setTimeout(() => setStartAnim(true), 0);
      return () => clearTimeout(timer);
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
    <section className="w-full  bg-[#f8f7f5] pt-[80px] sm:pt-[100px] lg:pt-[130px] pb-10 md:pb-20 px-5 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Centered heading and subtitle with scroll-driven fade */}
        <motion.div
          style={{ opacity: headingScrollOpacity, y: headingScrollY }}
          className="w-full flex flex-col items-center text-center"
        >
          {/* Hand-drawn Script Heading Image */}
          <div className="w-full overflow-hidden flex justify-center">
            <motion.div
              className="w-full flex justify-center"
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
                className="w-full max-w-[280px] xs:max-w-[360px] sm:max-w-[500px] md:max-w-[620px] lg:max-w-[720px] h-auto object-contain block select-none pointer-events-none"
                priority
              />
            </motion.div>
          </div>

          {/* Subtitle directly below image */}
          <div className="w-full overflow-hidden text-center">
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

        {/* Bottom Content Paragraphs - Centered with mx-auto & gap-10 */}
        <div className="w-full mt-16 sm:mt-24 lg:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto w-full">
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
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-normal leading-tight text-black/90 tracking-normal m-0"
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
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-normal leading-tight text-black/90 tracking-normal m-0"
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
