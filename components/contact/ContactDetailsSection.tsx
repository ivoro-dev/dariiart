"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { contactDetailsData } from "@/lib/data/contact";

function ContactLinkBlock({
  labelImage,
  value,
  href,
}: {
  labelImage: { src: string; alt: string; width: number; height: number };
  value: string;
  href: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col items-start gap-2">
      {/* Label Image with subtle tilt on hover */}
      <motion.div
        animate={{
          scale: hovered ? 1.05 : 1,
          rotate: hovered ? -2 : 0,
        }}
        transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
      >
        <Image
          src={labelImage.src}
          alt={labelImage.alt}
          width={labelImage.width}
          height={labelImage.height}
          className="w-[110px] sm:w-[120px] md:w-[130px] h-auto object-contain block select-none pointer-events-none"
        />
      </motion.div>

      {/* Interactive Link with Arrow & Underline Animation */}
      <a
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="inline-flex items-center gap-1.5 no-underline relative text-black group py-0.5"
      >
        <span className="text-[18px] sm:text-[20px] md:text-[22px] font-medium text-black tracking-tight block">
          {value}
        </span>

        {/* Animated Corner Arrow Icon */}
        <motion.span
          animate={{
            rotate: hovered ? 0 : 45,
            x: hovered ? 2 : 0,
            y: hovered ? -2 : 0,
            opacity: hovered ? 1 : 0.6,
          }}
          transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
          className="flex items-center text-black"
        >
          <ArrowUpRightIcon width={18} height={18} strokeWidth={2.2} />
        </motion.span>

        {/* Underline expansion from left */}
        <motion.span
          animate={{ scaleX: hovered ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.32, ease: [0.33, 1, 0.68, 1] }}
          className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-black origin-left block"
        />
      </a>
    </div>
  );
}

export default function ContactDetailsSection() {
  const {
    heading,
    subtitle,
    emailLabelImage,
    email,
    phoneLabelImage,
    phone,
    videoBgImage,
    videoSrc,
  } = contactDetailsData;

  return (
    <section className="w-full bg-[#F7F6F4] pt-6 sm:pt-12 lg:pt-16 pb-20 sm:pb-28 lg:pb-36 px-5 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="mb-10 sm:mb-14 lg:mb-16"
        >
          <h2 className="text-[38px] xs:text-[48px] sm:text-[60px] md:text-[72px] lg:text-[84px] xl:text-[88px] font-bold text-black leading-none tracking-tight m-0">
            {heading}
          </h2>
          <p className="text-[18px] xs:text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[45px] font-medium text-black tracking-tight mt-2 sm:mt-3 m-0">
            {subtitle}
          </p>
        </motion.div>

        {/* 2 Column Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          {/* Left Column: Email & Phone Details */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
            className="lg:col-span-5 flex flex-col gap-10 sm:gap-14"
          >
            {/* Email Block */}
            <ContactLinkBlock
              labelImage={emailLabelImage}
              value={email}
              href={`mailto:${email}`}
            />

            {/* Phone Block */}
            <ContactLinkBlock
              labelImage={phoneLabelImage}
              value={phone}
              href={`tel:${phone}`}
            />
          </motion.div>

          {/* Right Column: Parent Container with video-bg.png & centered video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
            className="lg:col-span-7 flex justify-center lg:justify-end w-full"
          >
            {/* Parent Frame Container with background video-bg.png and padding */}
            <div className="relative w-full max-w-[680px] aspect-[8143/4262] p-[3.5%] sm:p-[4%] flex items-center justify-center select-none">
              {/* Background frame image */}
              <img
                src={videoBgImage.src}
                alt={videoBgImage.alt}
                className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
              />

              {/* Centered Video filling the inner padded area */}
              <div className="relative w-full h-full overflow-hidden rounded-[2px] sm:rounded">
                <video
                  src={videoSrc}
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="auto"
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
