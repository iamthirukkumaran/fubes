"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/**
 * PLACEHOLDER PROJECTS — swap these for real work.
 * When you have a real project: set `placeholder: false`, add an `image`
 * path (put the file in /public), fill in title/type/year, and set `href`
 * to a live link or a case-study page.
 */
export type Project = {
  title: string;
  type: string;
  year: string;
  href?: string;
  image?: string;
  tint: string;
  placeholder?: boolean;
};

const projects: Project[] = [
  { title: "Your project here", type: "Web · E-commerce", year: "2026", tint: "bg-blue/10 text-blue", placeholder: true },
  { title: "Your project here", type: "Mobile · Flutter app", year: "2026", tint: "bg-coral/10 text-coral", placeholder: true },
  { title: "Your project here", type: "Web app · Dashboard", year: "2026", tint: "bg-violet/10 text-violet", placeholder: true },
  { title: "Your project here", type: "Design · Brand & UI", year: "2026", tint: "bg-lime/10 text-[color:var(--color-lime)]", placeholder: true },
];

const ease = [0.16, 1, 0.3, 1] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const inner = (
    <div className="group relative">
      <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-ink ${project.tint}`}>
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[22vw] font-semibold leading-none opacity-40 md:text-[10rem]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="sticker absolute bottom-5 left-5 !text-base">
              coming soon ✨
            </span>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-ink-soft">{project.type}</p>
        </div>
        <span className="font-inter text-sm text-ink-soft">{project.year}</span>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay: (index % 2) * 0.08 }}
      className={index % 2 === 1 ? "md:mt-20" : ""}
    >
      {project.href ? <Link href={project.href}>{inner}</Link> : inner}
    </motion.div>
  );
}

export function Work() {
  return (
    <section id="work" className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              Recent projects
            </h2>
            <p className="mt-3 handwritten text-2xl text-coral">
              (fresh spots — your project could live here 👀)
            </p>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm text-ink"
          >
            <span className="border-b-2 border-ink/20 pb-0.5 transition-colors group-hover:border-ink">
              View all
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-4">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
