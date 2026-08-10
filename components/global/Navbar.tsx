"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Home",    href: "/",        hoverColor: "#10CC6B" },
  { label: "About",   href: "/about",   hoverColor: "#CCA42B" },
  { label: "Work",    href: "/work",    hoverColor: "#3087FF" },
  { label: "Contact", href: "/contact", hoverColor: "#CC3FA4" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-[background-color,box-shadow] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled || menuOpen
            ? "bg-white"
            : "bg-transparent"
        } ${
          scrolled && !menuOpen
            ? "shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "shadow-none"
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-8 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Dariiarts logo"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
            {navLinks.map(({ label, href, hoverColor }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="nav-link text-base font-medium tracking-[0.02em] text-black no-underline relative pb-0.5"
                  style={{ ["--link-accent" as string]: hoverColor } as React.CSSProperties}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex items-center justify-center p-1 bg-transparent border-none cursor-pointer text-black"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <XMarkIcon width={24} height={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <Bars3Icon width={24} height={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[72px] left-0 right-0 bottom-0 z-[99] bg-white flex flex-col justify-center px-8"
          >
            <ul className="list-none m-0 p-0 flex flex-col">
              {navLinks.map(({ label, href, hoverColor }, i) => (
                <li
                  key={label}
                  className="border-b border-black/[0.08] overflow-hidden"
                >
                  <div className="overflow-hidden pb-1">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "100%" }}
                      transition={{
                        duration: 0.55,
                        delay: menuOpen ? 0.05 + i * 0.08 : 0,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                    >
                      <Link
                        href={href}
                        onClick={closeMenu}
                        className="block py-5 text-[clamp(36px,10vw,56px)] font-extrabold tracking-[-0.02em] leading-[1.1] text-black no-underline text-left transition-colors duration-[250ms]"
                        style={{ ["--link-accent" as string]: hoverColor } as React.CSSProperties}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = hoverColor;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "#000";
                        }}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal style tag — only for ::after pseudo-element (can't be done in Tailwind with dynamic CSS vars) */}
      <style>{`
        .nav-link {
          transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover {
          color: var(--link-accent);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--link-accent);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
