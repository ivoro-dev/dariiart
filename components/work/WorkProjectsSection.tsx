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
  onSelect: (id: string) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });

  const [hovered, setHovered] = useState(false);
  const bgImage = index % 2 === 0 ? "/images/gradient-one.png" : "/images/gradient-two.png";

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
      onClick={() => onSelect(project.id)}
      className="relative w-full p-10 overflow-hidden mb-16 md:mb-24 flex flex-col md:flex-row items-start gap-10 cursor-pointer group"
    >
      {/* Background: gradient image sliding from bottom to top with smooth fade */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)",
        }}
      >
        <Image
          src={bgImage}
          alt="Card gradient background"
          fill
          className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </motion.div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start gap-10 w-full">
        {/* Image (35% width on desktop) */}
        <div className="w-full md:w-[35%] shrink-0">
          <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={isInView ? { clipPath: "inset(0% 0% 0% 0%)" } : { clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            className="relative w-full aspect-square border border-black/10 overflow-hidden bg-[#E5E4E2] rounded-sm"
            ref={imageWrapperRef}
            onMouseEnter={() => setHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: hovered ? 1.5 : (isInView ? 1 : 1.2) }}
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
          className="w-full md:w-[60%] flex flex-col items-start"
        >
          <div className="flex flex-col items-start max-w-[440px] w-full">
            <h3 className="text-[clamp(28px,4vw,40px)] mt-[20px] md:mt-[40px] font-bold text-black uppercase leading-none tracking-[-0.02em] mb-3 group-hover:translate-x-1 transition-transform duration-300">
              {project.title}
            </h3>
            
            <p className="text-[clamp(16px,1.5vw,20px)] font-medium leading-[1.3] text-black/90 mb-4">
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
  const router = useRouter();

  const handleVideoEnded = () => {
    if (selectedProjectId) {
      router.push(`/work/${selectedProjectId}`);
    }
  };

  useEffect(() => {
    if (selectedProjectId && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Fallback if browser blocks unmuted video
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      });
    }
  }, [selectedProjectId]);

  return (
    <section className="w-full bg-[#F7F6F4] px-10 pb-24 box-border">
      <div className="w-full flex flex-col">
        {projects.map((project, index) => (
          <ProjectWorkCard
            key={project.id || project.title}
            project={project}
            index={index}
            onSelect={(id) => setSelectedProjectId(id)}
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
            <video
              ref={videoRef}
              src="/project-demo-1.mp4"
              autoPlay
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover"
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
