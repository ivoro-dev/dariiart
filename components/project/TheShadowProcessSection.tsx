"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function TheShadowProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);
  const video4Ref = useRef<HTMLVideoElement>(null);
  const video5Ref = useRef<HTMLVideoElement>(null);

  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView) {
      if (video3Ref.current) {
        video3Ref.current.play().catch(() => {});
      }
      if (video4Ref.current) {
        video4Ref.current.play().catch(() => {});
      }
      if (video5Ref.current) {
        video5Ref.current.play().catch(() => {});
      }
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-white px-6 sm:px-12 md:px-16 py-10 sm:py-16 flex flex-col justify-center box-border"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20">
        
        {/* 1. Poster Image Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center items-center"
        >
          <div className="w-full max-w-4xl relative overflow-hidden group">
            <Image
              src="/projects/the-shadow/poster.png"
              alt="The Shadow Poster"
              width={1400}
              height={1800}
              className="w-full h-auto block mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>

        {/* 2. Two Paragraphs on Left Side with gap-3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-[620px] w-full flex flex-col gap-3"
        >
          <p className="text-[clamp(14px,1.7vw,18px)] font-medium text-black leading-[1.2] tracking-tight">
            The filmmaking process with my lovely crew.
          </p>
          <p className="text-[clamp(14px,1.7vw,18px)] font-medium text-black leading-[1.2] tracking-tight whitespace-pre-line">
            {"Thank you to everyone who put their time,\nenergy and effort into bringing this idea to life\nand helping me give the audience a chance to\nexperience a part of their inner self."}
          </p>
        </motion.div>

        {/* 3. Shooting Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-full relative overflow-hidden group"
        >
          <Image
            src="/projects/the-shadow/shooting.jpg"
            alt="Shooting The Shadow"
            width={1920}
            height={1080}
            className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </motion.div>

        {/* 4. First 3-Column Grid: left col vid-3.mp4, other 2 empty */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-900 group shadow-xs"
          >
            <video
              ref={video3Ref}
              src="/projects/the-shadow/vid-3.mp4"
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
          <div className="hidden md:block" />
          <div className="hidden md:block" />
        </div>

        {/* 5. Second 3-Column Grid: left one empty, other two contain vid-4 and vid-5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full items-start">
          <div className="hidden md:block" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-900 group shadow-xs"
          >
            <video
              ref={video4Ref}
              src="/projects/the-shadow/vid-4.MOV"
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-900 group shadow-xs"
          >
            <video
              ref={video5Ref}
              src="/projects/the-shadow/vid-5.MOV"
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

        {/* 6. Credits Section: Left side daria.jpg, Right side Credits Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start w-full pt-4 sm:pt-8"
        >
          {/* Left: daria.jpg */}
          <div className="w-full relative overflow-hidden group">
            <Image
              src="/projects/the-shadow/daria.jpg"
              alt="Dariia Chervoniak on set of The Shadow"
              width={1200}
              height={1500}
              className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </div>

          {/* Right: Credits Text */}
          <div className="flex flex-col gap-6 sm:gap-7 text-black">
            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider">
              CREDITS
            </h3>

            <div className="flex flex-col gap-5 text-sm sm:text-base leading-snug">
              <div>
                <p className="font-bold text-black text-lg">Art Direction / Director</p>
                <p className="text-neutral-800 font-medium">Dariia Chervoniak</p>
              </div>

              <div>
                <p className="font-bold text-black text-lg">Cinematography</p>
                <p className="text-neutral-800 font-medium">Veronika Sirko</p>
              </div>

              <div>
                <p className="font-bold text-black text-lg">Editing</p>
                <p className="text-neutral-800 font-medium">Valeria Pryz &amp; Veronika Sirko</p>
              </div>

              <div>
                <p className="font-bold text-black text-lg">Voiceover</p>
                <p className="text-neutral-800 font-medium">Yuliia Dovhan</p>
              </div>

              <div>
                <p className="font-bold text-black text-lg">Cast</p>
                <p className="text-neutral-800 font-medium max-w-sm">
                  Svitlana Storchak · Alona Danylichenko · Vitalii Rozhian · Dariia Chervoniak · Valeria Pryz
                </p>
              </div>

              <div>
                <p className="font-bold text-black text-lg">Production</p>
                <p className="text-neutral-800 font-medium">Studio Lans Lab — Jonathan Turner</p>
              </div>

              <div>
                <p className="font-bold text-black text-lg">Music</p>
                <p className="text-neutral-800 font-medium">Udio</p>
              </div>

              <div>
                <p className="font-bold text-black text-lg">Special Thanks</p>
                <p className="text-neutral-800 font-medium">Andriy Taranishyn · Vitalii Rozhian</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
