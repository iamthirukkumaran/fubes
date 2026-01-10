"use client";

import { motion } from "framer-motion";

const brands = [
    "NEXU", "VORTEX", "APEX", "ZION", "QUANTUM", "VELOCITY", "ECHO", "PRISM", "AURA", "SPHERE"
];

// Duplicate for seamless loop
const marqueeBrands = [...brands, ...brands, ...brands];

export function ClientLogos() {
    return (
        <section className="relative overflow-hidden bg-black py-12 border-b border-white/5">
            <div className="absolute inset-0 z-10 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />

            <div className="flex">
                <motion.div
                    animate={{ x: "-33.33%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex flex-nowrap gap-16 md:gap-32 pr-16 md:pr-32"
                >
                    {marqueeBrands.map((brand, i) => (
                        <span
                            key={i}
                            className="text-xl md:text-3xl font-black uppercase tracking-widest text-zinc-800 whitespace-nowrap"
                        >
                            {brand}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
