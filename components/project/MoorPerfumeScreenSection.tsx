"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MoorPerfumeScreenSection() {
  const videoRef8 = useRef<HTMLVideoElement>(null);
  const videoRef9 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    [videoRef8, videoRef9].forEach((ref) => {
      if (ref.current) {
        ref.current.play().catch(() => {
          // Autoplay fallback
        });
      }
    });
  }, []);

  return (
    <section className="w-full bg-white px-6 sm:px-12 md:px-16 pb-16 sm:pb-24 flex flex-col gap-6 sm:gap-10 md:gap-12 justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12">
        {/* 1. Left Aligned Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[360px]"
        >
          <p className="text-[clamp(13px,1.6vw,18px)] font-medium text-black/90 leading-[1.2] tracking-tight">
            Screen posters around the city, each carrying a QR code that takes the customer through to discover the wild world of Moor (website).
          </p>
        </motion.div>

        {/* 2. Screen Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative overflow-hidden bg-neutral-100 shadow-xs group"
        >
          <Image
            src="/projects/moor-perfume/screen-banner.png"
            alt="Moor Perfume Screen Banner Posters"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </motion.div>

        {/* 3. Two Videos in a Row (vid-8.mp4 and vid-9.mp4) - Reduced to 80% max width */}
        <div className="w-full max-w-[80%]  grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-stretch">
          {/* Left: vid-8.mp4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full relative overflow-hidden bg-neutral-100 shadow-xs group"
          >
            <video
              ref={videoRef8}
              src="/projects/moor-perfume/vid-8.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              disablePictureInPicture
              aria-hidden="true"
              className="w-full h-full object-cover block"
            />
          </motion.div>

          {/* Right: vid-9.mp4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="w-full h-full relative overflow-hidden bg-neutral-100 shadow-xs group"
          >
            <video
              ref={videoRef9}
              src="/projects/moor-perfume/vid-9.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              disablePictureInPicture
              aria-hidden="true"
              className="w-full h-full object-cover block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
