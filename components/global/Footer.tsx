"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { footerData } from "@/lib/data/footer";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7F6F4] border-t border-black/10 py-6 px-6 sm:px-12 md:px-16 box-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
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
        <div className="flex items-center gap-6 sm:gap-8 shrink-0">
          {footerData.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="block"
            >
              <motion.div
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                className="flex items-center justify-center"
              >
                <Image
                  src={social.image}
                  alt={social.name}
                  width={50}
                  height={50}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain opacity-90 hover:opacity-100 transition-opacity duration-200 block"
                />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
