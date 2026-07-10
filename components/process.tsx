"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Your goal, budget, timeline. Fixed scope up front.",
    color: "text-blue",
    border: "border-blue",
  },
  {
    num: "02",
    title: "Design",
    desc: "Screens in Figma first. You approve before we build.",
    color: "text-coral",
    border: "border-coral",
  },
  {
    num: "03",
    title: "Build",
    desc: "Clean code, regular check-ins. Web, app & backend together.",
    color: "text-violet",
    border: "border-violet",
  },
  {
    num: "04",
    title: "Launch & support",
    desc: "We ship, hand over the keys, and stick around. You own it all.",
    color: "text-[color:var(--color-lime)]",
    border: "border-lime",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Process() {
  return (
    <section className="border-t border-line bg-paper-2 px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          eyebrow="How we work"
          title={
            <>
              A simple, honest process <span className="hl hl-yellow">(no jargon).</span>
            </>
          }
          className="mb-16 md:mb-20"
        />

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`rounded-2xl border border-line/70 bg-paper/70 p-6 shadow-[0_10px_30px_rgba(13,13,13,0.04)] ${s.border}`}
            >
              <span className={`font-display text-3xl font-semibold ${s.color}`}>{s.num}</span>
              <h3 className="mt-3 font-display text-2xl tracking-tight text-ink">{s.title}</h3>
              <p className="mt-3 text-base leading-7 text-ink-soft">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
