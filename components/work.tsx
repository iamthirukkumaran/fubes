"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "PalmPilot",
    category: "Product / AI",
    color: "#3b82f6", // Blue
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop",
    year: "Active",
  },
  {
    id: 2,
    title: "Scrolla",
    category: "Product / Social",
    color: "#f97316", // Orange/Red
    image:
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2670&auto=format&fit=crop",
    year: "Beta",
  },
  {
    id: 3,
    title: "Neon Drift",
    category: "Game / Experience",
    color: "#22c55e", // Green
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    year: "v1.0",
  },
  {
    id: 4,
    title: "Vertex AI",
    category: "Tool / Productivity",
    color: "#a855f7", // Purple
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2670&auto=format&fit=crop",
    year: "Alpha",
  },
];

export function Work() {
    const targetRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [xRange, setXRange] = useState(0);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    useEffect(() => {
        const calculateRange = () => {
             if (scrollRef.current) {
                const scrollDistance = scrollRef.current.scrollWidth - window.innerWidth + 50; 
                setXRange(scrollDistance > 0 ? scrollDistance : 0);
             }
        };

        calculateRange();
        
        const resizeObserver = new ResizeObserver(calculateRange);
        if (scrollRef.current) resizeObserver.observe(scrollRef.current);
        
        window.addEventListener("resize", calculateRange);

        return () => {
             resizeObserver.disconnect();
             window.removeEventListener("resize", calculateRange);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -xRange]);

    return (
        <section id="forge" ref={targetRef} className="relative h-[160vh] bg-[#050505] transition-colors duration-700">
            {/* Background Accent Glow */}
            <div 
                className="pointer-events-none fixed inset-0 z-0 opacity-20 transition-opacity duration-1000 blur-[150px]"
                style={{ 
                    background: hoveredProject !== null 
                        ? `radial-gradient(circle at 50% 50%, ${projects.find(p => p.id === hoveredProject)?.color}66, transparent 70%)`
                        : "transparent"
                }}
            />

            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div 
                    ref={scrollRef}
                    style={{ x }} 
                    className="flex gap-8 md:gap-20 pl-4 md:pl-24 pr-12 md:pr-40 min-w-max relative z-10"
                >
                    <div className="flex flex-col justify-center min-w-[300px] sm:min-w-[500px]">
                        <h2 className="text-6xl sm:text-8xl font-black text-white leading-tight tracking-tighter">
                            Active <br />
                            <span className="text-zinc-800">Forge</span>
                        </h2>
                        <div className="mt-4 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-700">
                             <span>[ 04 / 04 SHIPPED ]</span>
                             <span className="h-[1px] w-12 bg-zinc-900" />
                             <span className="animate-pulse text-red-900">Live Status</span>
                        </div>
                        <p className="mt-8 text-zinc-500 max-w-sm text-lg font-light leading-relaxed">
                            A curated ecosystem of digital artifacts, each pushing the boundaries of what software can be.
                        </p>
                    </div>

                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/work`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className="group relative h-[60vh] w-[45vh] sm:h-[75vh] sm:w-[55vh] flex-shrink-0 overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5 transition-all duration-500 hover:border-white/20"
                            style={{ 
                                "--product-accent": project.color 
                            } as any}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            
                            {/* Accent Border Glow */}
                            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-accent/30 rounded-2xl" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 p-10 w-full">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3">
                                        <div 
                                            className="h-2 w-2 rounded-full" 
                                            style={{ backgroundColor: project.color }}
                                        />
                                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">{project.category}</p>
                                    </div>
                                    <div className="flex justify-between items-end mt-2">
                                        <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">{project.title}</h3>
                                        <span className="text-sm font-mono text-white/30 uppercase tracking-widest">{project.year}</span>
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
