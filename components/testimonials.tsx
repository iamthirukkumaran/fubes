"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Are you two actually any good?",
    a: "Send us your idea — we'll show you exactly how we'd build it. If we're not the right fit, we'll say so.",
  },
  {
    q: "How much does it cost?",
    a: "Fixed price, quoted up front after a quick call. Tell us your budget and we'll be straight with you.",
  },
  {
    q: "How long does it take?",
    a: "A site: a couple of weeks. Apps: longer. Either way, you get a timeline before we start.",
  },
  {
    q: "Website and app together?",
    a: "Yes — that's the whole point of a duo. One team, shared backend, consistent design.",
  },
  {
    q: "Who owns everything?",
    a: "You do. Code, hosting, domains, app-store accounts — all in your name. No lock-in.",
  },
];

export function Testimonials() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-line px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <span className="eyebrow">Good to know</span>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl">
              Questions, <span className="hl hl-lime">answered</span>
            </h2>
            <p className="mt-3 handwritten text-2xl text-violet">ask us anything, really</p>
          </div>

          <div className="md:col-span-8">
            <div className="border-t border-line">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-line">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-xl tracking-tight text-ink md:text-2xl">
                        {f.q}
                      </span>
                      <span
                        className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-7 text-ink-soft md:text-lg">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
