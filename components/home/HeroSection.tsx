"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startVideo = () => {
      video.currentTime = 0;
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    };

    const alreadyDone =
      typeof window !== "undefined" &&
      (window as Window & { __preloaderDone?: boolean }).__preloaderDone;

    if (alreadyDone) {
      startVideo();
    } else {
      window.addEventListener("preloader:done", startVideo, { once: true });
    }

    return () => {
      window.removeEventListener("preloader:done", startVideo);
    };
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    setMuted(next);
  };

  const handleVideoEnd = () => {
    const video = videoRef.current;

    // Check if user is still viewing the Hero Section (top 50% of viewport height)
    const currentScroll = window.scrollY || window.pageYOffset;
    if (currentScroll < window.innerHeight * 0.5) {
      const lenis = (window as Window & { __lenis?: any }).__lenis;
      if (lenis) {
        lenis.scrollTo(window.innerHeight, { duration: 1.4 });
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }
    }

    // Loop video continuously
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  return (
    <section className="relative w-full h-dvh overflow-hidden bg-black">
      {/* Full-bleed video */}
      <video
        ref={videoRef}
        src="/assets/hero-video.mp4"
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover block"
      />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Mute / Unmute button */}
      <motion.button
        onClick={toggleMute}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
        aria-label={muted ? "Unmute video" : "Mute video"}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="absolute bottom-8 right-8 z-10 flex items-center gap-2 bg-white/[0.12] backdrop-blur-[10px] border border-white/[0.22] rounded-full py-[10px] px-[18px] cursor-pointer text-white text-[12px] font-medium tracking-[0.08em] uppercase"
      >
        <AnimatePresence mode="wait" initial={false}>
          {muted ? (
            <motion.span
              key="muted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="flex items-center"
            >
              <SpeakerXMarkIcon width={16} height={16} />
            </motion.span>
          ) : (
            <motion.span
              key="unmuted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="flex items-center"
            >
              <SpeakerWaveIcon width={16} height={16} />
            </motion.span>
          )}
        </AnimatePresence>
        <span>{muted ? "Unmute" : "Mute"}</span>
      </motion.button>
    </section>
  );
}
