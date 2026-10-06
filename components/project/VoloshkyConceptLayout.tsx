"use client";

import Image from "next/image";
import voloshkyConcept from "@/public/images/Voloshky.jpg";

export default function VoloshkyConceptLayout() {
  return (
    <div className="w-full mb-10 sm:mb-14 md:mb-16">
      <Image
        src={voloshkyConcept}
        alt="Voloshky concept development"
        sizes="(min-width: 1280px) 1160px, 100vw"
        className="block w-full h-auto"
      />
    </div>
  );
}
