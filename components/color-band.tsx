"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ColorBand() {
  return (
    <section className="relative overflow-hidden bg-blue px-5 py-24 text-paper md:px-8 md:py-32">
      {/* playful shapes */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-yellow/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 left-10 h-56 w-56 rounded-full bg-violet/40 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-paper/60">
            The Fubbes way
          </span>
          <h2 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] md:text-8xl">
            Less talk. <br />
            <span className="text-yellow">More shipping.</span>
          </h2>
        </motion.div>

        <Link
          href="/contact"
          className="group inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-paper px-8 py-4 text-sm text-ink transition-transform hover:-translate-y-0.5"
        >
          Let&apos;s go
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
