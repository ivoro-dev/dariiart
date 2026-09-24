"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MoorPerfumeVideoSection() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);
  const videoRef5 = useRef<HTMLVideoElement>(null);
  const videoRef6 = useRef<HTMLVideoElement>(null);
  const videoRef7 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    [videoRef1, videoRef2, videoRef3, videoRef4, videoRef5, videoRef6, videoRef7].forEach((ref) => {
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
        {/* 1. Board Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative overflow-hidden bg-neutral-100 shadow-xs group"
        >
          <Image
            src="/projects/moor-perfume/board.png"
            alt="Moor Perfume Board Visual"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </motion.div>

        {/* 2. Video 1 (vid-1.mp4) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative overflow-hidden bg-neutral-100 shadow-xs group flex items-center justify-center"
        >
          <video
            ref={videoRef1}
            src="/projects/moor-perfume/vid-1.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
            className="w-full h-auto object-cover block"
          />
        </motion.div>

        {/* 3. Grid matching reference image: Left col height strictly EQUAL to right col height */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch">
          {/* Left Column: vid-2.mp4 (Strictly equal height to right column) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full relative overflow-hidden bg-neutral-100 shadow-xs group min-h-[350px] md:min-h-0"
          >
            <video
              ref={videoRef2}
              src="/projects/moor-perfume/vid-2.mp4"
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

          {/* Right Column: Stacked vid-3.mp4 & vid-4.mp4 (Equal height distribution) */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 h-full">
            {/* Top row: vid-3.mp4 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="w-full flex-1 relative overflow-hidden bg-neutral-100 shadow-xs group"
            >
              <video
                ref={videoRef3}
                src="/projects/moor-perfume/vid-3.mp4"
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

            {/* Bottom row: vid-4.mp4 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="w-full flex-1 relative overflow-hidden bg-neutral-100 shadow-xs group"
            >
              <video
                ref={videoRef4}
                src="/projects/moor-perfume/vid-4.mp4"
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

        {/* 4. Video 5 (vid-5.mp4) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative overflow-hidden bg-neutral-100 shadow-xs group flex items-center justify-center"
        >
          <video
            ref={videoRef5}
            src="/projects/moor-perfume/vid-5.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
            className="w-full h-auto object-cover block"
          />
        </motion.div>

        {/* 5. Video 6 (vid-6.mp4) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative overflow-hidden bg-neutral-100 shadow-xs group flex items-center justify-center"
        >
          <video
            ref={videoRef6}
            src="/projects/moor-perfume/vid-6.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
            className="w-full h-auto object-cover block"
          />
        </motion.div>

        {/* 6. Video 7 (vid-7.mp4) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative overflow-hidden bg-neutral-100 shadow-xs group flex items-center justify-center"
        >
          <video
            ref={videoRef7}
            src="/projects/moor-perfume/vid-7.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
            className="w-full h-auto object-cover block"
          />
        </motion.div>
      </div>
    </section>
  );
}
