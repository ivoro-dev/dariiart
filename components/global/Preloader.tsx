"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const lastFloorRef = useRef(-1);

  useEffect(() => {
    let fontsReady = false;
    let videoLoaded = false;
    let minTimeDone = false;

    function computeProgress(): number {
      const signals: number[] = [
        fontsReady ? 1 : 0,
        videoLoaded ? 1 : 0,
        minTimeDone ? 1 : 0,
      ];
      return (signals.reduce((a, b) => a + b, 0) / signals.length) * 100;
    }

    function animateProgress(timestamp: number) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const real = computeProgress();
      const current = progressRef.current;
      const diff = real - current;
      const step = Math.max(0.3, diff * 0.06);
      const next = Math.min(current + step, real);
      progressRef.current = next;

      const floorNext = Math.floor(next);
      if (floorNext !== lastFloorRef.current) {
        lastFloorRef.current = floorNext;
        setProgress(floorNext);
      }

      if (next < 100) {
        rafRef.current = requestAnimationFrame(animateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          (window as Window & { __preloaderDone?: boolean }).__preloaderDone = true;
          window.dispatchEvent(new CustomEvent("preloader:done"));
          setVisible(false);
        }, 500);
      }
    }

    rafRef.current = requestAnimationFrame(animateProgress);

    // Minimum display timer
    const minTimer = setTimeout(() => {
      minTimeDone = true;
    }, 1800);

    // Max fallback timer so preloader never hangs
    const maxTimer = setTimeout(() => {
      fontsReady = true;
      videoLoaded = true;
      minTimeDone = true;
    }, 3500);

    // Font loading signal
    document.fonts.ready.then(() => {
      fontsReady = true;
    });

    // Check video readiness
    const video = videoRef.current;
    if (video) {
      if (video.readyState >= 3) {
        videoLoaded = true;
        setVideoReady(true);
      } else {
        const onCanPlay = () => {
          videoLoaded = true;
          setVideoReady(true);
        };
        video.addEventListener("canplaythrough", onCanPlay, { once: true });
        video.addEventListener("canplay", onCanPlay, { once: true });
      }
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ y: "0%" }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
          }}
          className="fixed inset-0 z-[9999] bg-[#F7F6F4] flex flex-col items-center justify-center"
        >
          {/* Video logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="relative w-[min(260px,55vw)] aspect-square"
          >
            <video
              ref={videoRef}
              src="/assets/animated-logo.mp4"
              autoPlay
              muted
              playsInline
              loop
              onCanPlay={() => setVideoReady(true)}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Counter + bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: videoReady ? 1 : 0, y: videoReady ? 0 : 16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-12 w-[min(260px,55vw)] flex flex-col gap-3"
          >
            {/* Percentage row */}
            <div className="flex justify-between items-baseline">
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-black/40">
                Loading
              </span>
              <span className="text-[13px] font-bold tracking-[0.04em] text-black tabular-nums">
                {String(progress).padStart(2, "0")}%
              </span>
            </div>

            {/* Track */}
            <div className="w-full h-px bg-black/[0.12] relative overflow-hidden">
              {/* Fill — width is dynamic, must stay inline */}
              <motion.div
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
                className="absolute top-0 left-0 h-full bg-black"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
