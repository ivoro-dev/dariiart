"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

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
      return scrollY + windowHeight >= documentHeight - 60;
    };

    const handleWheel = (e: WheelEvent) => {
      const atBottom = checkAtBottom();

      if (atBottom && e.deltaY > 0 && !isNavigatingRef.current) {
        lastScrollTimeRef.current = Date.now();
        // Calibrated: max 2 seconds of continuous scrolling down to fill (100% / 2s)
        const increment = Math.max(0.8, Math.min(2.5, Math.abs(e.deltaY) * 0.018));
        progressRef.current = Math.min(100, progressRef.current + increment);
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const atBottom = checkAtBottom();
      const touchCurrentY = e.touches[0].clientY;
      const deltaY = touchStartY - touchCurrentY;

      if (atBottom && deltaY > 5 && !isNavigatingRef.current) {
        lastScrollTimeRef.current = Date.now();
        // Calibrated for ~2 seconds of touch swiping
        const increment = Math.max(1.0, Math.min(3.0, deltaY * 0.025));
        progressRef.current = Math.min(100, progressRef.current + increment);
        touchStartY = touchCurrentY;
      }
    };

    const updateLoop = () => {
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTimeRef.current;

      // Smooth decay after 250ms pause
      if (timeSinceLastScroll > 250 && progressRef.current > 0 && !isNavigatingRef.current) {
        progressRef.current = Math.max(0, progressRef.current - 0.35);
      }

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

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    animationFrameId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [nextPage.href, router]);

  return (
    <section className="w-full bg-[#F7F6F4] border-t border-black/30 py-3.5 px-6 sm:px-12 md:px-16 box-border select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Side — Next Page Link */}
        <Link
          href={nextPage.href}
          className="text-base sm:text-lg font-medium tracking-tight text-black no-underline hover:opacity-75 transition-opacity"
        >
          Next Page
        </Link>

        {/* Right Side — Scroll Down Hint & Outlined Progress Bar */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <span className="text-sm sm:text-base font-normal text-black flex items-center gap-1">
            Scroll Down <span className="text-sm leading-none">↓</span>
          </span>

          {/* Progress Bar Track (Outlined rectangle with solid black fill) */}
          <Link
            href={nextPage.href}
            className="w-32 sm:w-48 md:w-56 h-3 sm:h-3.5 border border-black p-[1px] bg-transparent relative overflow-hidden inline-block cursor-pointer"
            aria-label={`Go to next page (${nextPage.label})`}
          >
            <div
              className="h-full bg-black transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
