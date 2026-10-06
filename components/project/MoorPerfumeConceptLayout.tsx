"use client";

import Image from "next/image";

export default function MoorPerfumeConceptLayout() {
  return (
    <div className="w-full mb-10 sm:mb-14 md:mb-16 grid grid-cols-1 md:grid-cols-[0.85fr_1fr] gap-3 items-stretch">
      <div className="relative aspect-[477/650] overflow-hidden">
        <Image
          src="/projects/moor-perfume/pic-1.jpg"
          alt="Moor Perfume concept development moodboard"
          fill
          sizes="(min-width: 1280px) 582px, (min-width: 768px) 46vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="grid grid-rows-2 gap-3 min-h-0">
        <video
          src="/projects/moor-perfume/wild-flowers-creation.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Wild flowers creation process"
          className="block w-full h-full min-h-0 aspect-video md:aspect-auto object-cover"
        />
        <video
          src="/projects/moor-perfume/flower-2.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Moor Perfume floral artwork animation"
          className="block w-full h-full min-h-0 aspect-video md:aspect-auto object-cover"
        />
      </div>
    </div>
  );
}
