"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const projects = [
    {
        title: "Apex Core",
        label: "Digital Product",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "Vortex Ident",
        label: "Brand Identity",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "Elysian Lab",
        label: "Web Platform",
        image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200",
    }
];

export function Work() {
    return (
        <section id="work" className="bg-black py-40">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-40">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[11px] font-bold uppercase tracking-[0.6em] text-zinc-600 mb-8 block"
                    >
                        Archive // Vol. 01
                    </motion.span>
                    <motion.h2
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl font-black md:text-8xl lg:text-9xl tracking-[-0.05em] leading-[0.85] text-white text-right"
                    >
                        SELECTED <br />
                        <span className="italic text-zinc-900" style={{ WebkitTextStroke: "1px #444" }}>CRAFT</span>
                    </motion.h2>
                </div>

                <div className="space-y-40 md:space-y-80">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

    return (
        <div ref={ref} className="relative flex flex-col items-center group">
            <motion.div
                style={{ scale, rotate }}
                className="relative aspect-[16/9] w-full overflow-hidden rounded-[40px] md:rounded-[80px] bg-zinc-900 ring-1 ring-white/10"
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>

            <motion.div
                style={{ y }}
                className="mt-12 text-center md:-mt-40 md:z-10 bg-black/50 backdrop-blur-xl p-10 rounded-[40px] border border-white/5"
            >
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-4 block">
                    {project.label}
                </span>
                <h3 className="text-5xl font-black uppercase tracking-tighter md:text-8xl lg:text-9xl text-white">
                    {project.title}
                </h3>
            </motion.div>
        </div>
    );
}
