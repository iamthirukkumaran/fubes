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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505] px-4 sm:px-6"
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)", backgroundSize: "40px 40px" }} 
      />

      {/* Kinetic Typography Layer (Background) */}
      <div className="absolute inset-0 flex flex-col justify-center gap-12 opacity-[0.02] select-none pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ x: i % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap text-[20vw] font-black tracking-tighter font-montserrat"
          >
            {Array(4).fill("BORN TO BUILD THE PRODUCT FORGE ").join("") }
          </motion.div>
        ))}
      </div>

      {/* Subtle Mouse-following Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-30 transition-opacity blur-[150px]"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x * 100 + 50}% ${mousePosition.y * 100 + 50}%, rgba(255,255,255,0.08), transparent 50%)`,
        }}
      />

      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none z-20" />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-30 flex w-full max-w-7xl flex-col items-center px-4 md:px-12 text-center pt-[120px]"
      >
        {/* Massive Typography - Centered Layout */}
        <div className="flex flex-col items-center leading-[0.75] tracking-[-0.07em] font-montserrat">
          <h1 className="text-[18vw] sm:text-[14vw] font-black text-white uppercase flex flex-col items-center sm:flex-row sm:items-baseline gap-x-8">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ 
                  y: 0,
                  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
                }}
                whileInView={{
                  y: [0, -10, 0],
                  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="block"
              >
                BORN
              </motion.span>
            </span>
            <span className="text-zinc-900 text-[10vw] sm:text-[8vw] italic lowercase font-light tracking-tighter block sm:inline">
               / forge
            </span>
          </h1>
          <h1 className="text-[18vw] sm:text-[14vw] font-black uppercase mt-4">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ 
                  y: 0,
                  transition: { duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
                }}
                whileInView={{
                  y: [0, 10, 0],
                  transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                className="block text-transparent"
                style={{ WebkitTextStroke: "2px rgba(255,255,255,1)" }}
              >
                TO BUILD
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Subtitle & CTA */}
        <div className="mt-32 flex flex-col items-center gap-16 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-xl md:text-3xl font-light leading-tight text-zinc-500 max-w-2xl mx-auto"
          >
            The parent company for the next generation of <br /> <span className="text-white">digital artifacts</span>.
          </motion.p>
          
          <div className="flex gap-12 flex-wrap justify-center">
             {["PalmPilot", "Scrolla", "Neon Drift"].map((name) => (
                <div key={name} className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-zinc-800" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                    {name}
                  </span>
                </div>
             ))}
          </div>

          <div className="mt-12 flex justify-center w-full">
            <MagneticButton>
              <Link
                href="/work"
                className="group relative flex h-32 w-32 items-center justify-center rounded-full border border-white/10 transition-all hover:border-white/40 md:h-44 md:w-44"
              >
                <div className="relative z-10 text-white font-black text-[10px] uppercase tracking-widest text-center transition-transform group-hover:scale-110">
                  Explore <br /> Forge
                </div>
                <div className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                <div className="absolute inset-0 rounded-full bg-black z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                   <span className="text-black font-black text-[10px] uppercase tracking-widest text-center">Explore <br /> Forge</span>
                </div>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
