"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        num: "01",
        title: "AI Labs",
        color: "#3b82f6",
        desc: "Building the next generation of intelligent tools, starting with PalmPilot.",
        tags: ["LLMs", "Generative Art", "Agents"]
    },
    {
        num: "02",
        title: "Social Flux",
        color: "#f97316",
        desc: "Redefining how we connect and scroll. Scrolla is just the beginning.",
        tags: ["Networking", "Real-time", "Social UI"]
    },
    {
        num: "03",
        title: "Game Forge",
        color: "#22c55e",
        desc: "Immersive multiplayer experiences that push the boundaries of the browser.",
        tags: ["WebGPU", "Multiplayer", "3D Worlds"]
    },
    {
        num: "04",
        title: "Creative Tools",
        color: "#a855f7",
        desc: "Software designed for people who genuinely care about what they're making.",
        tags: ["Design Tools", "Workflows", "Video"]
    }
];

export function Services() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="relative py-40 bg-[#050505] px-6 border-t border-white/5">
            <div className="mx-auto max-w-7xl">
                <div className="mb-20">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-500">
                        The Ecosystem
                    </span>
                    <h2 className="mt-4 text-5xl md:text-7xl font-black text-white tracking-tighter">
                        THE PRODUCT ENGINE
                    </h2>
                </div>

                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ borderBottomWidth: "1px", borderColor: "rgba(255,255,255,0.05)" }}
                            whileHover={{ borderColor: service.color }}
                            onHoverStart={() => setHovered(index)}
                            onHoverEnd={() => setHovered(null)}
                            className="group relative flex flex-col items-start justify-between py-20 md:flex-row md:items-center transition-all duration-500 border-t border-white/5"
                        >
                            {/* Background Glow on Hover */}
                            <div
                                className="absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none"
                                style={{ 
                                    background: `linear-gradient(90deg, ${service.color}11, transparent)`,
                                    opacity: hovered === index ? 1 : 0
                                }}
                            />

                            <div className="relative z-10 flex items-baseline gap-8 md:w-1/2">
                                <span className="text-sm font-mono text-zinc-800 transition-colors group-hover:text-white">({service.num})</span>
                                <h3 className="text-4xl md:text-7xl font-black text-zinc-900 group-hover:text-white transition-all duration-500 tracking-tighter">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="relative z-10 mt-8 md:mt-0 md:w-1/2 flex flex-col md:items-end">
                                <p className="text-lg text-zinc-500 group-hover:text-zinc-300 transition-colors max-w-sm md:text-right mb-6 font-light leading-relaxed">
                                    {service.desc}
                                </p>
                                <div className="flex gap-3 flex-wrap justify-end">
                                    {service.tags.map(tag => (
                                        <span 
                                            key={tag} 
                                            className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest border border-white/5 rounded-full text-zinc-800 transition-all duration-500"
                                            style={{ 
                                                borderColor: hovered === index ? `${service.color}33` : "rgba(255,255,255,0.05)",
                                                color: hovered === index ? service.color : ""
                                            }}
                                        >
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
