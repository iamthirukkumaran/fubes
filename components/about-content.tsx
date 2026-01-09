"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const philosophy = [
    {
        tag: "Approach",
        title: "The Visionary Frame",
        content: "We provide comprehensive branding solutions that bridge the gap between imagination and digital reality."
    },
    {
        tag: "Manifesto",
        title: "Concept Over Form",
        content: "Every project starts with a core concept. We don't just build; we craft narratives that strengthen brand identities."
    },
    {
        tag: "Delivery",
        title: "Artifact Excellence",
        content: "Our work thrives where the user interacts. We focus on the final digital product as the primary habitat for your brand."
    }
];

export function AboutContent() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

    return (
        <section ref={containerRef} className="py-40 px-6 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-24 lg:grid-cols-2 lg:gap-40 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="sticky top-40"
                    >
                        <span className="text-[11px] font-bold uppercase tracking-[0.8em] text-zinc-400 mb-12 block">
                            System // Philosophy
                        </span>
                        <h2 className="text-6xl font-black md:text-8xl lg:text-[10rem] leading-[0.8] tracking-tighter text-black">
                            DRIVEN BY <br />
                            <motion.span
                                style={{ rotate, WebkitTextStroke: "1px rgba(0,0,0,0.05)" }}
                                className="inline-block text-zinc-200 italic"
                            >
                                PURPOSE
                            </motion.span>
                        </h2>
                    </motion.div>

                    <div className="space-y-40 lg:pt-60">
                        {philosophy.map((item, index) => (
                            <motion.div
                                key={item.tag}
                                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative"
                            >
                                <div className="absolute -left-12 top-0 h-full w-px bg-zinc-100 group-hover:bg-black transition-all duration-1000 origin-top" />
                                <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.6em] text-zinc-500 group-hover:tracking-[1em] transition-all duration-700">
                                    {item.tag}
                                </span>
                                <h3 className="mb-10 text-5xl font-black tracking-tighter text-black md:text-7xl">
                                    {item.title}
                                </h3>
                                <p className="text-xl text-zinc-600 font-light leading-relaxed md:text-3xl max-w-xl">
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
