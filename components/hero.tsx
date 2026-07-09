"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import StarBorder from "./reactbits/star-border";
import GradientText from "./reactbits/gradient-text";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-36 pb-20 md:px-8 md:pt-48 md:pb-24">
      <div className="pointer-events-none absolute right-[8%] top-40 hidden h-24 w-24 rounded-full bg-yellow/40 blur-xl md:block" />
      <div className="pointer-events-none absolute left-[4%] bottom-20 hidden h-28 w-28 rounded-full bg-violet/20 blur-2xl md:block" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-10 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <span className="eyebrow">Open for projects · 2026</span>
          </span>
          <span className="handwritten text-xl text-blue">(actually!)</span>
        </motion.div>

        <h1 className="max-w-[16ch] font-display text-[14vw] font-extrabold leading-[0.92] tracking-[-0.04em] text-ink sm:text-7xl md:text-[6rem]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="block"
            >
              Websites &amp; apps
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.24, ease }}
              className="block"
            >
              people <GradientText>actually love.</GradientText>
            </motion.span>
          </span>
        </h1>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="max-w-md text-lg text-ink-soft"
          >
            Two developers. Web, mobile &amp; backend — built properly, start to finish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="flex flex-wrap items-center gap-5"
          >
            <StarBorder href="/contact">Start a project</StarBorder>
            <Link href="/work" className="group inline-flex items-center gap-2 text-sm text-ink">
              <span className="border-b-2 border-ink/20 pb-0.5 transition-colors group-hover:border-ink">
                See our work
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 flex flex-wrap items-center gap-3"
        >
          {[
            { t: "no templates 🤞", c: "border-coral text-coral" },
            { t: "you own everything", c: "border-blue text-blue" },
            { t: "powered by chai ☕", c: "border-lime text-[color:var(--color-lime)]" },
          ].map((chip) => (
            <span
              key={chip.t}
              className={`wiggle rounded-full border-2 bg-paper px-4 py-1.5 text-sm font-medium ${chip.c}`}
            >
              {chip.t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
