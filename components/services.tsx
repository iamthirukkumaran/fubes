"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        num: "01",
        title: "Strategy & Branding",
        desc: "Defining the core DNA of future-ready brands.",
        tags: ["Brand Identity", "Positioning", "Voice"]
    },
    {
        num: "02",
        title: "Web Experience",
        desc: "Immersive, high-performance digital platforms.",
        tags: ["Development", "Motion", "3D"]
    },
    {
        num: "03",
        title: "Product Design",
        desc: "Functional interfaces that delight and convert.",
        tags: ["UI/UX", "Prototyping", "Design Systems"]
    },
    {
        num: "04",
        title: "Content Production",
        desc: "Visual storytelling for the digital age.",
        tags: ["Art Direction", "3D Motion", "Copy"]
    }
];

export function Services() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="relative py-40 bg-zinc-950 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="mb-20">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
                        Capabilities
                    </span>
                    <h2 className="mt-4 text-5xl md:text-7xl font-black text-white tracking-tighter">
                        OUR EXPERTISE
                    </h2>
                </div>

                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ borderBottomWidth: "1px", borderColor: "rgba(255,255,255,0.1)" }}
                            whileHover={{ borderColor: "rgba(255,255,255,1)" }}
                            onHoverStart={() => setHovered(index)}
                            onHoverEnd={() => setHovered(null)}
                            className="group relative flex flex-col items-start justify-between py-16 md:flex-row md:items-center transition-colors border-t border-white/10"
                        >
                            {/* Background Glow on Hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent opacity-0 transition-opacity duration-500 ${hovered === index ? "opacity-100" : ""}`}
                            />

                            <div className="relative z-10 flex items-baseline gap-8 md:w-1/2">
                                <span className="text-sm font-mono text-zinc-500">({service.num})</span>
                                <h3 className="text-4xl md:text-6xl font-bold text-zinc-400 group-hover:text-white transition-colors duration-300">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="relative z-10 mt-6 md:mt-0 md:w-1/2 flex flex-col md:items-end">
                                <p className="text-lg text-zinc-500 group-hover:text-zinc-300 transition-colors max-w-sm md:text-right mb-4">
                                    {service.desc}
                                </p>
                                <div className="flex gap-2 flex-wrap justify-end">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-wider border border-white/10 rounded-full text-zinc-500 group-hover:text-white group-hover:border-white/30 transition-all">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ x: -20 }}
                                whileHover={{ x: 0 }}
                            >
                                <ArrowUpRight className="w-12 h-12 text-white" />
                            </motion.div>
                        </motion.div>
                    ))}
                    {/* Closing border */}
                    <div className="border-t border-white/10" />
                </div>
            </div>
        </section>
    );
}
