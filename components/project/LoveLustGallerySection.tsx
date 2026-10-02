"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoveLustGallerySection() {
  return (
    <section className="w-full bg-white px-6 sm:px-12 md:px-16 pb-24 sm:pb-32 flex flex-col justify-center box-border">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-14 sm:gap-20 md:gap-28">
        
        {/* 1. 1.png / 1.JPG — 70% width, left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-[70%] mr-auto overflow-hidden group shadow-2xs"
        >
          <Image
            src="/projects/love-lust/1.JPG"
            alt="Love, Lust and Violence — Still 1"
            width={1600}
            height={2000}
            priority
            className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </motion.div>

        {/* 2. 2.png / 2.JPG — 70% width, right aligned */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-[70%] ml-auto overflow-hidden group shadow-2xs"
        >
          <Image
            src="/projects/love-lust/2.JPG"
            alt="Love, Lust and Violence — Still 2"
            width={1600}
            height={2000}
            className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </motion.div>

        {/* 3. 3.png & 4.png / 3.JPG & 4.JPG — Side by side, equal width with NO gap between */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full overflow-hidden shadow-2xs">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="w-full overflow-hidden group"
          >
            <Image
              src="/projects/love-lust/3.JPG"
              alt="Love, Lust and Violence — Still 3"
              width={1400}
              height={1750}
              className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full overflow-hidden group"
          >
            <Image
              src="/projects/love-lust/4.JPG"
              alt="Love, Lust and Violence — Still 4"
              width={1400}
              height={1750}
              className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </motion.div>
        </div>

        {/* 4. 5.png / 5.JPG — 70% width, right aligned */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-[70%] ml-auto overflow-hidden group shadow-2xs"
        >
          <Image
            src="/projects/love-lust/5.JPG"
            alt="Love, Lust and Violence — Still 5"
            width={1600}
            height={2000}
            className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </motion.div>

        {/* 5. 6.png & 7.png / 6.JPG & 7.JPG — Side by side, equal width and gap-10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full items-start">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="w-full overflow-hidden group shadow-2xs"
          >
            <Image
              src="/projects/love-lust/6.JPG"
              alt="Love, Lust and Violence — Still 6"
              width={1400}
              height={1750}
              className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full overflow-hidden group shadow-2xs"
          >
            <Image
              src="/projects/love-lust/7.JPG"
              alt="Love, Lust and Violence — Still 7"
              width={1400}
              height={1750}
              className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </motion.div>
        </div>

        {/* 6. 8.png & 9.png / 8.jpg & 9.JPG — Side by side, gap-5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full items-start">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="w-full overflow-hidden group shadow-2xs"
          >
            <Image
              src="/projects/love-lust/8.jpg"
              alt="Love, Lust and Violence — Still 8"
              width={1400}
              height={1750}
              className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full overflow-hidden group shadow-2xs"
          >
            <Image
              src="/projects/love-lust/9.JPG"
              alt="Love, Lust and Violence — Still 9"
              width={1400}
              height={1750}
              className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </motion.div>
        </div>

        {/* 7. 10.png / 10.JPG — 70% width, left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-[70%] mr-auto overflow-hidden group shadow-2xs"
        >
          <Image
            src="/projects/love-lust/10.JPG"
            alt="Love, Lust and Violence — Still 10"
            width={1600}
            height={2000}
            className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </motion.div>

        {/* TEAM / Credits Section with 11.JPG */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start pt-6 sm:pt-10"
        >
          {/* Left: TEAM list */}
          <div className="md:col-span-5 flex flex-col">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black mb-8 sm:mb-10">
              TEAM
            </h3>

            <div className="flex flex-col gap-6 sm:gap-7 text-black">
              <div>
                <p className="font-bold text-black text-base sm:text-lg leading-snug">Visual Consultant</p>
                <p className="text-neutral-800 font-medium text-sm sm:text-base leading-snug">Daria Chervoniak (@daria_chervoniak)</p>
              </div>

              <div>
                <p className="font-bold text-black text-base sm:text-lg leading-snug">Photographer</p>
                <p className="text-neutral-800 font-medium text-sm sm:text-base leading-snug">Shivam (borninlight)</p>
              </div>

              <div>
                <p className="font-bold text-black text-base sm:text-lg leading-snug">Photographer</p>
                <p className="text-neutral-800 font-medium text-sm sm:text-base leading-snug">Julian Tong (@jytph0tos)</p>
              </div>

              <div>
                <p className="font-bold text-black text-base sm:text-lg leading-snug">Model</p>
                <p className="text-neutral-800 font-medium text-sm sm:text-base leading-snug">Izel (@fawnborn)</p>
              </div>

              <div>
                <p className="font-bold text-black text-base sm:text-lg leading-snug">Model</p>
                <p className="text-neutral-800 font-medium text-sm sm:text-base leading-snug">Haru Ng (@ko_Haruo)</p>
              </div>
            </div>
          </div>

          {/* Right: 11.JPG Image */}
          <div className="md:col-span-7 w-full relative overflow-hidden group shadow-2xs aspect-[4/3] bg-neutral-100">
            <Image
              src="/projects/love-lust/11.JPG"
              alt="Love, Lust and Violence — Team & Cast"
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
