"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Lumina Noir",
        category: "Web / 3D",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        year: "2024",
    },
    {
        id: 2,
        title: "Apex Architecture",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop",
        year: "2024",
    },
    {
        id: 3,
        title: "Vanguard Fashion",
        category: "Ecommerce",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop",
        year: "2023",
    },
    {
        id: 4,
        title: "Echo Valley",
        category: "Experience",
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop",
        year: "2023",
    },
];

export function Work() {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={targetRef} className="relative h-[180vh] bg-zinc-950">
            <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 md:gap-12 pl-4 md:pl-12">
                    <div className="flex flex-col justify-center min-w-[300px] sm:min-w-[400px]">
                        <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight">
                            Recent <br />
                            <span className="text-zinc-500">Works</span>
                        </h2>
                        <p className="mt-6 text-zinc-400 max-w-sm">
                            A selection of our most passionate endeavors, pushing the boundaries of digital, brand, and experience.
                        </p>
                    </div>

                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/work`}
                            className="group relative h-[60vh] w-[40vh] sm:h-[70vh] sm:w-[50vh] flex-shrink-0 overflow-hidden rounded-xl bg-zinc-900 border border-white/10"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs uppercase tracking-widest text-zinc-400">{project.category}</p>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
                                        <span className="text-lg font-mono text-zinc-500">{project.year}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                    <div className="flex flex-col justify-center min-w-[300px] items-center px-12">
                        <Link href="/work" className="group flex items-center gap-4 text-2xl font-bold text-white transition-colors">
                            <span className="underline decoration-zinc-600 underline-offset-8 group-hover:text-zinc-300">View Archive</span>
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
