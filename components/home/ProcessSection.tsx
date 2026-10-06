"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const [isMuted, setIsMuted] = useState(true);

  const syncVideos = () => {
    const video = videoRef.current;
    const background = bgVideoRef.current;
    if (video && background && background.readyState > 0) {
      if (Math.abs(background.currentTime - video.currentTime) > 0.1) {
        background.currentTime = video.currentTime;
      }
    }
  };

  useEffect(() => {
    const wrapper = videoWrapperRef.current;
    const video = videoRef.current;
    const background = bgVideoRef.current;
    if (!wrapper || !video || !background) return;

    let isVisible = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          video.play().catch(() => {
            if (isVisible) {
              video.muted = true;
              setIsMuted(true);
              video.play().catch(() => {});
            }
          });
          background.play().catch(() => {});
        } else {
          video.pause();
          background.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(wrapper);
    return () => {
      observer.disconnect();
      video.pause();
      background.pause();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !videoWrapperRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      const isMobile = window.innerWidth < 768;
      const initialScale = isMobile ? 0.78 : 0.55;
      const initialRadius = isMobile ? "20px" : "36px";

      tl.fromTo(
        videoWrapperRef.current,
        {
          scale: initialScale,
          borderRadius: initialRadius,
        },
        {
          scale: 1,
          borderRadius: "0px",
          ease: "power1.out",
          duration: 0.35,
        },
        0
      );

      tl.to(
        videoWrapperRef.current,
        {
          scale: 1,
          borderRadius: "0px",
          ease: "none",
          duration: 0.3,
        },
        0.35
      );

      tl.to(
        videoWrapperRef.current,
        {
          scale: initialScale,
          borderRadius: initialRadius,
          ease: "power1.in",
          duration: 0.35,
        },
        0.65
      );

      if (overlayRef.current) {
        tl.fromTo(
          overlayRef.current,
          { opacity: 1, y: 0 },
          { opacity: 0, y: -40, ease: "power1.out", duration: 0.35 },
          0
        );
        tl.to(overlayRef.current, { opacity: 0, duration: 0.3 }, 0.35);
        tl.to(
          overlayRef.current,
          { opacity: 1, y: 0, ease: "power1.in", duration: 0.35 },
          0.65
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-40 w-full h-[200vh] bg-[#f8f7f5] text-black overflow-visible"
    >
      <div className="sticky top-0 z-40 h-screen w-full flex items-center justify-center overflow-hidden bg-[#f8f7f5]">
        <div
          ref={videoWrapperRef}
          className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center will-change-transform transform-gpu origin-center shadow-2xl"
        >
          <video
            ref={bgVideoRef}
            src="/creative-process.mp4"
            preload="auto"
            loop
            muted
            playsInline
            onLoadedMetadata={syncVideos}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-3xl opacity-80 pointer-events-none brightness-95"
          />

          <video
            ref={videoRef}
            src="/creative-process.mp4"
            preload="auto"
            loop
            muted={isMuted}
            playsInline
            onTimeUpdate={syncVideos}
            className="relative z-10 w-full h-full object-contain pointer-events-none"
          />

          <div
            ref={overlayRef}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20 pointer-events-none will-change-transform"
          >
            <span className="px-4 py-1.5 rounded-full border border-white/25 bg-black/40 backdrop-blur-md text-white text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4 shadow-lg">
              Creative Process
            </span>
            <h2 className="text-[clamp(32px,6vw,72px)] font-bold text-white uppercase leading-none tracking-tight max-w-4xl drop-shadow-md">
              Crafting Digital Mastery
            </h2>
            <p className="mt-4 text-white/80 text-base sm:text-lg max-w-lg font-normal drop-shadow">
              A glimpse into the creative workflow
            </p>
          </div>
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
          >
            {isMuted ? (
              <SpeakerXMarkIcon className="w-5 h-5" />
            ) : (
              <SpeakerWaveIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
