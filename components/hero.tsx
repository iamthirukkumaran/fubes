"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 8]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[110vh] flex-col items-center justify-center overflow-hidden bg-black px-6"
    >
      {/* Background Noise & Gradient */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]), opacity, scale, rotateX }}
        className="perspective-1000 z-10 w-full max-w-fit"
      >
        <div className="mb-12 overflow-hidden text-center">
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block text-[11px] font-bold uppercase tracking-[0.6em] text-zinc-500"
          >
            A Digital Design Studio
          </motion.span>
        </div>

        <h1 className="flex flex-col items-center text-[18vw] font-black leading-[0.75] tracking-[-0.05em] text-white md:text-[15rem] lg:text-[22rem]">
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              FUBES
            </motion.span>
          </div>
          <div className="overflow-hidden -mt-[0.1em]">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block italic text-zinc-900 stroke-white stroke-1"
              style={{ WebkitTextStroke: "1px white" }}
            >
              AGENCY
            </motion.span>
          </div>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="mt-16 flex flex-col items-center gap-12"
        >
          <p className="max-w-xl text-center text-xl font-light leading-relaxed text-zinc-400 md:text-2xl">
            We architect digital experiences that bridge the gap between human intuition and algorithmic precision.
          </p>

          <div className="flex flex-col items-center gap-8 sm:flex-row">
            <Link
              href="/work"
              className="group relative flex h-20 items-center justify-center overflow-hidden rounded-full bg-white px-12 text-[12px] font-black uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 transition-colors group-hover:text-black">Explore Archive</span>
              <motion.div
                className="absolute inset-0 z-0 bg-zinc-200"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "circOut" }}
              />
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-zinc-700"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-12 w-[1px] bg-zinc-800"
        />
      </motion.div>
    </section>
  );
}
