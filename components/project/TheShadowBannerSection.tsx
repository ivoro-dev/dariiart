"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function TheShadowBannerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasEntered(true);
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "playVideo", args: "" }),
          "*"
        );
      }
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#f8f7f5] px-6 sm:px-12 md:px-16 py-4 sm:py-12 flex justify-center"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={hasEntered || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[16/9] min-h-[200px] sm:min-h-[500px] md:min-h-[620px] bg-black relative overflow-hidden rounded-xs shadow-md"
        >
          <iframe
            ref={iframeRef}
            src={
              hasEntered
                ? "https://www.youtube.com/embed/l-0BWLF07XY?autoplay=1&mute=1&playsinline=1&enablejsapi=1"
                : "https://www.youtube.com/embed/l-0BWLF07XY?enablejsapi=1&mute=1&playsinline=1"
            }
            title="The Shadow"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full absolute inset-0 border-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
