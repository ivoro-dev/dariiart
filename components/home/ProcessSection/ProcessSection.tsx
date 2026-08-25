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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }

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

      // 1. Entry: Scale up from 55% to 100% as section enters viewport until fully in view
      tl.fromTo(
        videoWrapperRef.current,
        {
          scale: 0.55,
          borderRadius: "36px",
        },
        {
          scale: 1,
          borderRadius: "0px",
          ease: "power1.out",
          duration: 0.35,
        },
        0
      );

      // 2. Full Entry Hold: Stay at 100% full width and height while user is inside section
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

      // 3. Exit: Scale back down from 100% to 55% as user leaves section (scrolling down or up)
      tl.to(
        videoWrapperRef.current,
        {
          scale: 0.55,
          borderRadius: "36px",
          ease: "power1.in",
          duration: 0.35,
        },
        0.65
      );

      // Overlay text animation
      if (overlayRef.current) {
        // Fade out overlay as video expands to 100%
        tl.fromTo(
          overlayRef.current,
          { opacity: 1, y: 0 },
          { opacity: 0, y: -40, ease: "power1.out", duration: 0.35 },
          0
        );
        // Hold opacity 0 while full
        tl.to(overlayRef.current, { opacity: 0, duration: 0.3 }, 0.35);
        // Fade back in as it scales back down on exit
        tl.to(
          overlayRef.current,
          { opacity: 1, y: 0, ease: "power1.in", duration: 0.35 },
          0.65
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const syncVideos = () => {
    if (videoRef.current && bgVideoRef.current) {
      if (Math.abs(bgVideoRef.current.currentTime - videoRef.current.currentTime) > 0.1) {
        bgVideoRef.current.currentTime = videoRef.current.currentTime;
      }
    }
  };

  const handleVideoEnded = () => {
    // Smoothly scroll the user down when the process video completes
    const lenis = (window as Window & { __lenis?: any }).__lenis;
    const targetScroll = window.scrollY + window.innerHeight * 0.85;

    if (lenis) {
      lenis.scrollTo(targetScroll, {
        duration: 1.4,
      });
    } else {
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }

    // Replay/loop videos after triggering scroll
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    if (bgVideoRef.current) {
      bgVideoRef.current.currentTime = 0;
      bgVideoRef.current.play().catch(() => {});
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-40 w-full h-[200vh] bg-[#F7F6F4] text-black overflow-visible"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 z-40 h-screen w-full flex items-center justify-center overflow-hidden bg-[#F7F6F4]">
        {/* Scaled Video Wrapper */}
        <div
          ref={videoWrapperRef}
          className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center will-change-transform transform-gpu origin-center shadow-2xl"
        >
          {/* Ambient Blurred Video Background */}
          <video
            ref={bgVideoRef}
            src="/creative-process.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-3xl opacity-80 pointer-events-none brightness-95"
          />

          {/* Main Crisp Foreground Video Element (100% Uncropped) */}
          <video
            ref={videoRef}
            src="/creative-process.mp4"
            autoPlay
            muted={isMuted}
            playsInline
            onTimeUpdate={syncVideos}
            onEnded={handleVideoEnded}
            className="relative z-10 w-full h-full object-contain pointer-events-none"
          />

          {/* Floating Overlay Header (Visible on scaled state) */}
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
              Scroll to step inside the video workflow
            </p>
          </div>

          {/* Mute / Unmute Audio Button */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
            className="absolute bottom-6 right-6 z-30 p-3.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
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
