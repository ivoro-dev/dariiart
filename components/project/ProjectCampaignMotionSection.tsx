"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCampaignMotionSection() {
  const rowVideoRef = useRef<HTMLVideoElement>(null);
  const comp1VideoRef = useRef<HTMLVideoElement>(null);
  const comp2VideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    [rowVideoRef, comp1VideoRef, comp2VideoRef].forEach((ref) => {
      if (ref.current) {
        ref.current.play().catch(() => {
          // Autoplay fallback
        });
      }
    });
  }, []);

  const topText =
    "The identity extends beyond a logo into a campaign that lives across physical and digital touchpoints. Motion became the central storytelling device, allowing patterns to transform, interact, and evolve as they travel between cultures.";

  return (
    <section className="w-full bg-white px-6 sm:px-12 md:px-16 py-12 sm:py-20 flex justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-10 sm:gap-14 md:gap-16">
        {/* 1. Left-aligned top text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[460px] text-left"
        >
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-black/90 leading-[1.2] tracking-tight">
            {topText}
          </p>
        </motion.div>

        {/* 2. Video row.mp4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative overflow-hidden bg-neutral-100"
        >
          <video
            ref={rowVideoRef}
            src="/images/row.mp4"
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

        {/* 3. Two side-by-side centered videos: comp-1.mp4 & comp-2.mp4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-4xl w-full mx-auto justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full relative overflow-hidden bg-neutral-100"
          >
            <video
              ref={comp1VideoRef}
              src="/images/comp-1.mp4"
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="w-full relative overflow-hidden bg-neutral-100"
          >
            <video
              ref={comp2VideoRef}
              src="/images/comp-2.mp4"
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

        {/* 4. Image museum.png */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative overflow-hidden bg-neutral-100"
        >
          <Image
            src="/images/museum.png"
            alt="Voloshky Museum Display"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover block"
            priority={false}
          />
        </motion.div>

        {/* 5. Left-aligned bold call to action text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-start text-left pt-4 sm:pt-6"
        >
          <Link
            href="/contact"
            className="inline-block text-[18px] sm:text-[22px] md:text-[26px] font-bold text-black hover:opacity-75 transition-opacity tracking-tight"
          >
            Want to know more? Let’s get in touch.
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
