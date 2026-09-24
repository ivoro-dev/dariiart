"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MoorPerfumeGallerySection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback for video autoplay policies
      });
    }
  }, []);

  return (
    <section className="w-full bg-white px-6 sm:px-12 md:px-16 pb-16 sm:pb-24 flex flex-col gap-6 sm:gap-10 md:gap-12 justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12">
        {/* 1. Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative overflow-hidden bg-neutral-100 shadow-xs group"
        >
          <Image
            src="/projects/moor-perfume/main-image.png"
            alt="Moor Perfume Main Visual"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </motion.div>

        {/* 2. Logo 2 Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative overflow-hidden bg-neutral-100 shadow-xs group"
        >
          <Image
            src="/projects/moor-perfume/logo-2.png"
            alt="Moor Perfume Logo Variant"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </motion.div>

        {/* 3. Row with Video on Left and Logo 3 on Right */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-stretch">
          {/* Left: Video (logo.mp4) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative overflow-hidden bg-neutral-100 border-2 border-[#C5D8FF] shadow-xs group flex items-center justify-center"
          >
            <video
              ref={videoRef}
              src="/projects/moor-perfume/logo.mp4"
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

          {/* Right: Image (logo-3.png) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="w-full relative overflow-hidden bg-neutral-100 shadow-xs group flex items-center justify-center"
          >
            <Image
              src="/projects/moor-perfume/logo-3.png"
              alt="Moor Perfume Logo 3"
              width={1200}
              height={900}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
