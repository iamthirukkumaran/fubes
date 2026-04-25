"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const philosophy = [
    {
        tag: "Studio",
        title: "The Product Forge",
        content: "FUBES is a creative product studio building a new generation of digital tools and experiences. What started as an idea to ship one great product has grown into a larger vision — a home for bold, well-crafted software that people actually love using.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
    },
    {
        tag: "DNA",
        title: "Fast. Focused. Unapologetic.",
        content: "Under FUBES, every product is built with the same DNA. We don't wait for permission to build something new. From AI-powered video tools to multiplayer games, we build the software we want to see in the world.",
        img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop"
    },
    {
        tag: "Ecosystem",
        title: "PalmPilot, Scrolla & Beyond",
        content: "Each product stands on its own, but together they represent a single belief — that the best software comes from people who genuinely care about what they're making. Currently shipping PalmPilot and Scrolla, with 10+ experiments in the pipe.",
        img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2670&auto=format&fit=crop"
    }
];

export function AboutContent() {
    const containerRef = useRef<HTMLElement>(null);
    const [activeCard, setActiveCard] = useState(0);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

    return (
        <section id="mission" ref={containerRef} className="py-40 px-6 bg-[#050505] overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">
                    {/* Sticky Left Column */}
                    <div className="sticky top-32 flex flex-col justify-between h-fit min-h-[50vh]">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-zinc-800 mb-8 block">
                                SYSTEM // MISSION
                            </span>
                            <h2 className="text-6xl font-black md:text-7xl lg:text-[10rem] leading-[0.75] tracking-tighter text-white mb-12 relative z-10">
                                BORN <br />
                                <motion.span
                                    style={{ rotate }}
                                    className="inline-block text-zinc-900 italic"
                                >
                                    CREATIVE
                                </motion.span>
                            </h2>
                        </motion.div>

                        {/* Interactive Image Display */}
                        <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl mt-auto border border-white/5">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCard}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={philosophy[activeCard].img}
                                        alt={philosophy[activeCard].title}
                                        fill
                                        className="object-cover opacity-60"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40" />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Scrollable Column */}
                    <div className="flex flex-col gap-32 lg:pt-32 pb-32">
                        {philosophy.map((item, index) => (
                            <motion.div
                                key={item.tag}
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                                onViewportEnter={() => setActiveCard(index)}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative pl-12 border-l border-zinc-900 hover:border-white transition-colors duration-500"
                            >
                                <span className="mb-8 block text-xs font-bold uppercase tracking-[0.5em] text-zinc-800 group-hover:text-white transition-colors">
                                    {item.tag}
                                </span>
                                <h3 className="mb-10 text-4xl md:text-6xl font-black tracking-tighter text-white">
                                    {item.title}
                                </h3>
                                <p className="text-xl md:text-2xl text-zinc-500 group-hover:text-zinc-300 transition-colors font-light leading-relaxed max-w-lg">
                                    {item.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
