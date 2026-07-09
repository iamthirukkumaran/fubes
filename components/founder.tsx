"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Coffee, Ruler, type LucideIcon } from "lucide-react";
import { LINKEDIN_URL } from "./contact-cta";

/**
 * The team. To add a real photo: drop the file in /public and set `photo`
 * to e.g. "/thiru.jpg". Update GitHub links when ready.
 */
const team = [
  {
    name: "Thirukkumaran",
    role: "Full-stack & Backend Developer",
    initials: "TK",
    photo: "/thiru.png",
    bio: "Builds the web side end to end. Interfaces, APIs, databases, deployment.",
    funFact: "Debugs faster with chai",
    FunIcon: Coffee as LucideIcon,
    skills: ["Next.js", "React", "Node", "Postgres", "TypeScript"],
    tint: "bg-blue/10",
    initialsColor: "text-blue",
    roleColor: "text-blue",
    links: [
      { label: "LinkedIn", href: LINKEDIN_URL },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    name: "Anbu Arasu",
    role: "Mobile App Developer",
    initials: "AA",
    photo: "",
    bio: "Ships cross-platform apps in Flutter. One codebase, native feel on iOS and Android.",
    funFact: "Pixel-perfect, always",
    FunIcon: Ruler as LucideIcon,
    skills: ["Flutter", "Dart", "iOS", "Android", "Firebase"],
    tint: "bg-coral/10",
    initialsColor: "text-coral",
    roleColor: "text-coral",
    links: [
      { label: "LinkedIn", href: LINKEDIN_URL },
      { label: "GitHub", href: "#" },
    ],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Team() {
  return (
    <section id="team" className="border-t border-line px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20">
          <span className="eyebrow">The people</span>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            You&apos;ll work directly with <span className="hl hl-coral">us two.</span>
          </h2>
          <p className="mt-3 handwritten text-2xl text-blue">no middlemen, no mystery team</p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
            >
              <div className={`group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-ink ${m.tint}`}>
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`font-display text-8xl font-bold ${m.initialsColor} opacity-40 transition-transform duration-500 group-hover:scale-110 md:text-9xl`}>
                      {m.initials}
                    </span>
                  </div>
                )}
                <span className="sticker absolute bottom-4 left-4 z-20 !text-base">
                  <m.FunIcon className="h-4 w-4" strokeWidth={2} />
                  {m.funFact}
                </span>
              </div>

              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl tracking-tight text-ink">{m.name}</h3>
                <div className="flex gap-4">
                  {m.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
              <p className={`mt-1 text-sm font-medium ${m.roleColor}`}>{m.role}</p>
              <p className="mt-4 max-w-md text-ink-soft">{m.bio}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {m.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                  >
                    {s}
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
