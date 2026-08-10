"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// Sequential page sequence
const pageSequence = [
  { path: "/", label: "About", href: "/about" },
  { path: "/about", label: "Work", href: "/work" },
  { path: "/work", label: "Contact", href: "/contact" },
  { path: "/contact", label: "Home", href: "/" },
];

export default function NextPageTransition() {
  const pathname = usePathname();
  const router = useRouter();

  const [progress, setProgress] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const progressRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const isNavigatingRef = useRef(false);

  // Normalize pathname to strip trailing slashes (except root)
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  // Find next page based on current route
  const currentPageIndex = pageSequence.findIndex(
    (p) => p.path === normalizedPath
  );
  const nextPage =
    currentPageIndex !== -1
      ? pageSequence[(currentPageIndex + 1) % pageSequence.length]
      : pageSequence[1]; // default to About if unmapped

  // Reset progress when route changes
  useEffect(() => {
    progressRef.current = 0;
    setProgress(0);
    isNavigatingRef.current = false;
  }, [pathname]);

  // Main scroll, wheel, touch & decay loop
  useEffect(() => {
    let animationFrameId: number;

    const checkAtBottom = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      // Considered at bottom if within 60px of the page end
      return scrollY + windowHeight >= documentHeight - 60;
    };

    const handleScroll = () => {
      setIsAtBottom(checkAtBottom());
    };

    const handleWheel = (e: WheelEvent) => {
      const atBottom = checkAtBottom();
      setIsAtBottom(atBottom);

      // Only accumulate progress when scrolling down at the bottom of the page
      if (atBottom && e.deltaY > 0 && !isNavigatingRef.current) {
        lastScrollTimeRef.current = Date.now();
        // Calibrated fill increment: takes ~3-4 seconds of deliberate scrolling to reach 100%
        const increment = Math.max(0.4, Math.min(2.5, e.deltaY * 0.02));
        progressRef.current = Math.min(100, progressRef.current + increment);
      }
    };

    // Touch support for mobile devices
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const atBottom = checkAtBottom();
      setIsAtBottom(atBottom);

      const touchCurrentY = e.touches[0].clientY;
      const deltaY = touchStartY - touchCurrentY;

      // Swiping up (moving page down) at the bottom
      if (atBottom && deltaY > 5 && !isNavigatingRef.current) {
        lastScrollTimeRef.current = Date.now();
        const increment = Math.max(0.3, Math.min(2.0, deltaY * 0.025));
        progressRef.current = Math.min(100, progressRef.current + increment);
        touchStartY = touchCurrentY;
      }
    };

    // Animation & decay loop
    const updateLoop = () => {
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTimeRef.current;

      // Decay progress if user stopped scrolling for > 100ms
      if (timeSinceLastScroll > 100 && progressRef.current > 0 && !isNavigatingRef.current) {
        // Smooth gradual decay rate
        progressRef.current = Math.max(0, progressRef.current - 0.45);
      }

      // Check if 100% reached to trigger auto-navigation
      if (progressRef.current >= 100 && !isNavigatingRef.current) {
        isNavigatingRef.current = true;
        progressRef.current = 100;
        setProgress(100);
        router.push(nextPage.href);
      } else {
        setProgress(Math.round(progressRef.current));
      }

      animationFrameId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    animationFrameId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [nextPage.href, router]);

  return (
    <section className="w-full bg-[#F7F6F4] py-10 sm:py-14 px-6 sm:px-12 md:px-16 box-border select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* Left Side — Next Page Text */}
        <Link
          href={nextPage.href}
          className="group inline-flex items-center gap-3 no-underline text-black cursor-pointer"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-[0.1em] uppercase text-black/50">
            Next Page
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-black underline underline-offset-4 decoration-2 decoration-black group-hover:opacity-75 transition-opacity">
            {nextPage.label}
          </span>
          <motion.span
            whileHover={{ x: 4 }}
            className="inline-flex items-center text-black ml-1"
          >
            <ArrowRightIcon width={20} height={20} strokeWidth={2.5} />
          </motion.span>
        </Link>

        {/* Right Side — Progress Bar & Hint */}
        <div className="flex items-center gap-4 sm:gap-5 shrink-0">
          {/* Progress Percentage Display */}
          <span className="text-xs sm:text-sm font-mono font-bold text-black/70 min-w-[40px] text-right">
            {progress}%
          </span>

          {/* Progress Bar Track */}
          <div className="w-36 sm:w-48 md:w-56 h-2.5 sm:h-3 bg-black/10 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-black rounded-full transition-all duration-150 ease-out origin-left"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
