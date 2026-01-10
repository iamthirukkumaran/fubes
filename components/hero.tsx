"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { MagneticButton } from "./magnetic-button";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax effect for background
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-6"
    >
      {/* Dynamic Background */}
      <motion.div
        className="absolute inset-0 opacity-30 select-none pointer-events-none"
        animate={{
          x: mousePosition.x * -50,
          y: mousePosition.y * -50,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/20 blur-[100px]" />
      </motion.div>

      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex w-full max-w-[90vw] flex-col items-center"
      >
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-300">
            Available for new projects
          </span>
        </motion.div>

        {/* Massive Typography */}
        <div className="flex flex-col items-center leading-[0.8] tracking-tighter">
          <h1 className="text-[15vw] sm:text-[13vw] font-black text-white mix-blend-difference z-20">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                DIGITAL
              </motion.span>
            </span>
          </h1>
          <h1 className="relative text-[15vw] sm:text-[13vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-600 z-10 -mt-[0.1em]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                ALCHEMY
              </motion.span>
            </span>
            {/* Outline effect behind */}
            <span
              className="absolute inset-0 text-transparent pointer-events-none select-none z-[-1]"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
            >
              ALCHEMY
            </span>
          </h1>
        </div>

        {/* Subtitle & CTA */}
        <div className="mt-12 flex w-full flex-col items-center justify-between gap-12 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-md text-center text-sm font-light leading-relaxed text-zinc-400 md:text-left md:text-base"
          >
            Fubes is a design agency crafting brands, products, and campaigns that shift culture. We blend aesthetics with function.
          </motion.p>

          <MagneticButton>
            <Link
              href="/contact"
              className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 md:h-24 md:w-24"
            >
              <div className="relative z-10 text-black group-hover:-rotate-45 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
