"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { val: "2", label: "People, start to finish" },
  { val: "1", label: "Project at a time, done right" },
  { val: "Web + App", label: "Under one roof" },
];

export function AboutContent() {
  return (
    <section id="studio" className="border-t border-line px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <span className="eyebrow">The studio</span>
          </div>

          <div className="md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink md:text-6xl"
            >
              Two developers. <span className="hl hl-blue">Web</span> &amp;{" "}
              <span className="hl hl-coral">mobile</span>, done right. No middlemen, no fluff.
            </motion.h2>

            <div className="mt-14 grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                >
                  <div className="font-display text-4xl tracking-tight text-ink md:text-5xl">
                    {s.val}
                  </div>
                  <div className="mt-2 text-sm text-ink-soft">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
