"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function TheShadowPostersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView) {
      if (video1Ref.current) {
        video1Ref.current.play().catch(() => {});
      }
      if (video2Ref.current) {
        video2Ref.current.play().catch(() => {});
      }
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-white px-6 sm:px-12 md:px-16 py-6 sm:py-12 flex flex-col justify-center box-border"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-10">
        {/* Paragraph on Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[620px] w-full"
        >
          <p className="text-[clamp(14px,1.7vw,18px)] font-medium text-black leading-[1.2] tracking-tight whitespace-pre-line">
            {"A poster series translating the film's visual\nlanguage into static compositions."}
          </p>
        </motion.div>

        {/* 2 Videos in a Row: vid-1 on left, vid-2 on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full items-stretch">
          {/* Left: vid-1.mp4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-900 group shadow-xs"
          >
            <video
              ref={video1Ref}
              src="/projects/the-shadow/vid-1.mp4"
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

          {/* Right: vid-2.mp4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-900 group shadow-xs"
          >
            <video
              ref={video2Ref}
              src="/projects/the-shadow/vid-2.mp4"
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
