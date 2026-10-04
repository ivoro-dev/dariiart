"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Honour accessibility preference
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const lenis = new Lenis({
      // The body grows with route content; html has a fixed viewport height.
      content: document.body,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Expose for external use (e.g. programmatic scroll)
    window.__lenis = lenis;

    // Media can establish its height after the route's initial refresh.
    let mediaRefreshFrame: number | null = null;
    const refreshMediaLayout = (event: Event) => {
      if (
        !(event.target instanceof HTMLImageElement) &&
        !(event.target instanceof HTMLVideoElement)
      ) return;

      if (mediaRefreshFrame !== null) cancelAnimationFrame(mediaRefreshFrame);
      mediaRefreshFrame = requestAnimationFrame(() => {
        mediaRefreshFrame = null;
        ScrollTrigger.refresh();
        lenis.resize();
      });
    };
    document.addEventListener("load", refreshMediaLayout, true);
    document.addEventListener("loadedmetadata", refreshMediaLayout, true);

    // Sync Lenis scroll updates with GSAP ScrollTrigger
    const handleScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", handleScroll);

    // Wire Lenis into GSAP's ticker — one unified RAF loop
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000); // gsap time is in seconds, lenis expects ms
    };
    gsap.ticker.add(updateTicker);

    // Disable GSAP's lag smoothing so it doesn't interfere
    gsap.ticker.lagSmoothing(0);

    return () => {
      document.removeEventListener("load", refreshMediaLayout, true);
      document.removeEventListener("loadedmetadata", refreshMediaLayout, true);
      if (mediaRefreshFrame !== null) cancelAnimationFrame(mediaRefreshFrame);
      gsap.ticker.remove(updateTicker);
      lenis.off("scroll", handleScroll);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // Handle route changes: scroll to top immediately & refresh layout for ScrollTrigger & Lenis
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Allow DOM to settle, then refresh ScrollTrigger & Lenis layout
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (window.__lenis) {
        window.__lenis.resize();
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Renders nothing — purely side-effect
  return null;
}
