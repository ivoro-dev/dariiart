"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { footerData } from "@/lib/data/footer";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f7f5] border-t border-black/10 py-6 px-4 sm:px-8 md:px-16 box-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-4">
        {/* Left Side — Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={footerData.logo.src}
            alt={footerData.logo.alt}
            width={120}
            height={40}
            className="h-8 sm:h-9 w-auto object-contain block"
          />
        </Link>

        {/* Right Side — 3 Social Images in a row (Email, LinkedIn, Instagram) */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 shrink-0">
          {footerData.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="block w-20 h-9 md:w-24 md:h-10"
            >
              <motion.div
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                className="flex items-center justify-center w-full h-full"
              >
                <Image
                  src={social.image}
                  alt={social.name}
                  width={96}
                  height={40}
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-200 block"
                />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
