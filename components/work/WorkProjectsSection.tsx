"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects, type Project } from "@/lib/data/projects";

function ProjectWorkCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (id: string, index: number) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const isRevealed = useInView(cardRef, { once: true, margin: "-10%" });
  const isCardActive = useInView(cardRef, { amount: 0.35 });

  const [hovered, setHovered] = useState(false);

  // Mouse tracking for zoom effect
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const originX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const originY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageWrapperRef.current) return;
    const rect = imageWrapperRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(project.id, index)}
      className="relative w-full px-8 py-10 xs:px-10 xs:py-12 sm:p-10 md:p-14 mb-10 sm:mb-16 md:mb-24 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 cursor-pointer group overflow-hidden sm:overflow-visible"
    >
      {/* Background: phone-drawing-new.png on mobile, video-bg.png on desktop */}
      <motion.div
        initial={{ y: "30px", opacity: 0 }}
        animate={isCardActive ? { y: "0px", opacity: 1 } : { y: "30px", opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-[-8px] xs:inset-[-12px] sm:inset-[-18px] md:inset-[-24px] z-0 pointer-events-none"
      >
        {/* Mobile background frame: phone-drawing-new.png */}
        <Image
          src="/images/phone-drawing-new.png"
          alt="Card background frame"
          fill
          className="block sm:hidden object-fill opacity-95 transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          priority
        />
        {/* Desktop background frame: video-bg.png */}
        <Image
          src="/assets/video-bg.png"
          alt="Card background frame"
          fill
          className="hidden sm:block object-fill opacity-95 transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          priority
        />
      </motion.div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start gap-10 w-full">
        {/* Image (35% width on desktop) */}
        <div className="w-full md:w-[35%] shrink-0">
          <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={isRevealed ? { clipPath: "inset(0% 0% 0% 0%)" } : { clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            className="relative w-full aspect-square border border-black/10 overflow-hidden bg-[#E5E4E2] rounded-sm"
            ref={imageWrapperRef}
            onMouseEnter={() => setHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: hovered ? 1.5 : (isRevealed ? 1 : 1.2) }}
              transition={{
                duration: hovered ? 0.6 : 1.2,
                ease: hovered ? "easeOut" : [0.76, 0, 0.24, 1],
              }}
              style={{ originX, originY }}
              className="w-full h-full relative"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Content (60% width on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
          className="w-full md:w-[60%] flex flex-col items-start"
        >
          <div className="flex flex-col items-start max-w-[440px] w-full">
            <h3 className="text-[clamp(24px,4vw,40px)] mt-3 md:mt-[40px] font-bold text-black uppercase leading-none tracking-[-0.02em] mb-3 group-hover:translate-x-1 transition-transform duration-300">
              {project.title}
            </h3>
            
            <p className="text-[clamp(15px,1.5vw,20px)] font-medium leading-[1.35] text-black/90 mb-4 sm:whitespace-pre-line">
              {project.description}
            </p>

            {/* Labels */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.labels.map((label) => (
                <span
                  key={label}
                  className="px-3 py-1 md:px-4 md:py-1.5 border border-black/50 bg-white/40 backdrop-blur-sm rounded-sm text-[10px] md:text-xs font-semibold tracking-[0.06em] uppercase text-black/80"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function WorkProjectsSection() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const syncVideos = () => {
    const video = videoRef.current;
    const background = bgVideoRef.current;
    if (video && background && background.readyState > 0) {
      if (Math.abs(background.currentTime - video.currentTime) > 0.1) {
        background.currentTime = video.currentTime;
      }
    }
  };

  const handleVideoEnded = () => {
    if (selectedProjectId) {
      router.push(`/work/${selectedProjectId}`);
    }
  };

  const handleSelectProject = (id: string) => {
    if (id === "voloshky") {
      setSelectedProjectId(id);
    } else {
      router.push(`/work/${id}`);
    }
  };

  useEffect(() => {
    if (selectedProjectId && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      });
      if (bgVideoRef.current) {
        bgVideoRef.current.currentTime = 0;
        bgVideoRef.current.muted = true;
        bgVideoRef.current.play().catch(() => {});
      }
    }
  }, [selectedProjectId]);

  return (
    <section className="w-full bg-[#f8f7f5] px-4 sm:px-8 md:px-10 pb-24 box-border">
      <div className="w-full flex flex-col">
        {projects.map((project, index) => (
          <ProjectWorkCard
            key={project.id || project.title}
            project={project}
            index={index}
            onSelect={(id) => handleSelectProject(id)}
          />
        ))}
      </div>

      {/* Fullscreen Video Transition Screen */}
      <AnimatePresence>
        {selectedProjectId && (
          <motion.div
            key="video-transition"
            initial={{ x: "-100%", y: "100%" }}
            animate={{ x: "0%", y: "0%" }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden"
          >
            {/* Background Zoomed & Blurred Video */}
            <video
              ref={bgVideoRef}
              src="/project-demo-1.mp4"
              autoPlay
              muted
              playsInline
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-3xl opacity-80 pointer-events-none brightness-95"
            />

            {/* Main Foreground Video in Real Aspect Ratio */}
            <video
              ref={videoRef}
              src="/project-demo-1.mp4"
              autoPlay
              muted
              playsInline
              onTimeUpdate={syncVideos}
              onEnded={handleVideoEnded}
              className="relative z-10 w-full h-full object-contain pointer-events-none"
            />

            {/* Skip / Close indicator button in corner */}
            <button
              onClick={handleVideoEnded}
              className="absolute top-8 right-8 z-[100000] px-4 py-2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-widest rounded-full transition-colors cursor-pointer"
            >
              Skip
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
