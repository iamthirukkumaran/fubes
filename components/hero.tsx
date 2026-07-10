"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Ban, KeyRound, Coffee, ArrowRight, ChevronDown } from "lucide-react";
import StarBorder from "./reactbits/star-border";
import GradientText from "./reactbits/gradient-text";
import Magnet from "./reactbits/magnet";

const ease = [0.16, 1, 0.3, 1] as const;

const highlights = [
  { t: "No templates", Icon: Ban, c: "border-coral text-coral" },
  { t: "You own everything", Icon: KeyRound, c: "border-blue text-blue" },
  { t: "Powered by chai", Icon: Coffee, c: "border-lime text-[color:var(--color-lime)]" },
];

const focusPoints = [
  { label: "Brand systems", value: "Identity + UI" },
  { label: "Growth sites", value: "Conversion-led" },
  { label: "Product apps", value: "Fast & reliable" },
  { label: "Launch support", value: "From strategy to ship" },
];

export function Hero() {
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 320], [0, 100]);
  const glowOpacity = useTransform(scrollY, [0, 280], [0.95, 0.2]);
  const cardY = useTransform(scrollY, [0, 260], [0, -28]);
  const titleY = useTransform(scrollY, [0, 420], [0, -60]);
  const titleScale = useTransform(scrollY, [0, 420], [1, 0.96]);
  const titleOpacity = useTransform(scrollY, [0, 420], [1, 0.72]);
  const ctaY = useTransform(scrollY, [0, 420], [0, -10]);

  return (
    <section id="hero" data-offset="140" className="relative overflow-hidden px-5 pt-36 pb-20 md:px-8 md:pt-48 md:pb-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem]"
        style={{ y: glowY, opacity: glowOpacity }}
      >
        <div className="absolute left-[6%] top-16 h-44 w-44 rounded-full bg-blue/20 blur-3xl" />
        <div className="absolute right-[8%] top-24 h-56 w-56 rounded-full bg-coral/15 blur-3xl" />
        <div className="absolute left-1/2 top-12 h-32 w-[42rem] -translate-x-1/2 rounded-full border border-line/60" />
      </motion.div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
              className="max-w-4xl font-display text-[clamp(3rem,7vw,5.8rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-ink sm:text-7xl md:text-[6rem]"
            >
              We craft digital products that feel <GradientText>clear, premium, and built to grow.</GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="mt-8 max-w-2xl text-lg leading-8 text-ink-soft md:text-xl"
            >
              From launch pages to full product experiences, we help founders and teams turn ambition into a sharp online presence that looks refined and performs with purpose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              style={{ y: ctaY }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnet strength={0.25}>
                <StarBorder href="/contact">Book a discovery call</StarBorder>
              </Magnet>
              <Link href="/work" className="group inline-flex items-center gap-2 text-sm font-medium text-ink">
                <span className="border-b-2 border-ink/20 pb-0.5 transition-colors group-hover:border-ink">
                  Explore recent work
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-12 grid gap-3 sm:grid-cols-3"
            >
              {highlights.map((chip) => {
                const Icon = chip.Icon;
                return (
                  <span
                    key={chip.t}
                    className={`wiggle inline-flex items-center gap-1.5 rounded-full border border-line bg-paper/90 px-4 py-2 text-sm font-medium shadow-[0_8px_24px_rgba(13,13,13,0.04)] ${chip.c}`}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                    {chip.t}
                  </span>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            style={{ y: cardY }}
            className="surface-card relative overflow-hidden p-6 md:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,107,255,0.12),transparent_55%)]" />
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft">Studio focus</div>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                A compact team with the clarity of a larger agency.
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-ink-soft">
                We bring structure to your idea, shape it into something unmistakably yours, and ship it with calm confidence.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {focusPoints.map((point) => (
                  <div key={point.label} className="rounded-2xl border border-line/70 bg-paper/80 p-4">
                    <div className="text-sm font-medium text-ink">{point.label}</div>
                    <div className="mt-1 text-sm text-ink-soft">{point.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-line/70 bg-paper/80 px-4 py-3 text-sm text-ink-soft">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
                Fast collaboration · grounded strategy · thoughtful execution
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-16 flex items-center justify-between border-t border-line pt-6 text-sm font-medium uppercase tracking-[0.24em] text-ink-soft"
        >
          <span>Based in India, available worldwide</span>
          <span className="hidden items-center gap-2 md:inline-flex">
            Scroll
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
