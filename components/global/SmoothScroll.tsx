"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

export default function SmoothScroll() {
  useEffect(() => {
    // Honour accessibility preference
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Expose for external use (e.g. programmatic scroll)
    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    // Wire Lenis into GSAP's ticker — one unified RAF loop
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // gsap time is in seconds, lenis expects ms
    });

    // Disable GSAP's lag smoothing so it doesn't interfere
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
      delete (window as Window & { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // Renders nothing — purely side-effect
  return null;
}
