"use client";

import { motion } from "framer-motion";

// A mix of what we do + a little personality.
const items = [
  { t: "Full-stack web", c: "bg-blue" },
  { t: "Flutter apps", c: "bg-coral" },
  { t: "UI / UX design", c: "bg-violet" },
  { t: "Backend & APIs", c: "bg-lime" },
  { t: "No lorem ipsum", c: "bg-pink" },
  { t: "E-commerce", c: "bg-blue" },
  { t: "Actually replies", c: "bg-yellow" },
  { t: "Pixel-perfect (a bit obsessive)", c: "bg-coral" },
  { t: "Dashboards", c: "bg-violet" },
  { t: "Chai-powered", c: "bg-lime" },
];

const loop = [...items, ...items];

export function ClientLogos() {
  return (
    <section className="relative overflow-hidden border-y-2 border-ink bg-paper py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-paper to-transparent" />

      <motion.div
        animate={{ x: "-50%" }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center gap-10 pr-10"
      >
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="whitespace-nowrap font-display text-xl italic text-ink md:text-2xl">
              {item.t}
            </span>
            <span className={`h-2.5 w-2.5 rounded-full ${item.c}`} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
