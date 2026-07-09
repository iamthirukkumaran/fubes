"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web development",
    quip: "Sites that load fast and don't look like everyone else's.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    color: "text-blue",
    dot: "bg-blue",
  },
  {
    num: "02",
    title: "Mobile apps",
    quip: "One codebase, both app stores, zero drama.",
    tags: ["Flutter", "Dart", "iOS", "Android"],
    color: "text-coral",
    dot: "bg-coral",
  },
  {
    num: "03",
    title: "UI / UX & product design",
    quip: "We design it before we build it, so you're never surprised.",
    tags: ["Figma", "Prototyping", "Design systems"],
    color: "text-violet",
    dot: "bg-violet",
  },
  {
    num: "04",
    title: "Backend & APIs",
    quip: "The boring-but-crucial stuff that keeps it all running.",
    tags: ["Node", "Postgres", "REST / GraphQL", "Cloud"],
    color: "text-[color:var(--color-lime)]",
    dot: "bg-lime",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Services() {
  return (
    <section id="services" className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              Everything your product needs, <span className="hl hl-violet">under one roof.</span>
            </h2>
          </div>
          <p className="max-w-xs text-ink-soft">Two people, four disciplines, one team.</p>
        </div>

        <div className="rule">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: (i % 2) * 0.05 }}
              className="group grid grid-cols-1 gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-8 md:py-14"
            >
              <div className="flex items-start gap-5 md:col-span-4">
                <span className={`mt-3 h-2.5 w-2.5 flex-shrink-0 rounded-full ${s.dot}`} />
                <h3 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
                  {s.title}
                </h3>
              </div>
              <p className={`handwritten text-2xl md:col-span-5 md:pt-2 ${s.color}`}>{s.quip}</p>
              <div className="flex flex-wrap content-start gap-2 md:col-span-3 md:justify-end md:pt-3">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
