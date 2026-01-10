"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const philosophy = [
    {
        tag: "Approach",
        title: "The Visionary Frame",
        content: "We provide comprehensive branding solutions that bridge the gap between imagination and digital reality.",
        img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2668&auto=format&fit=crop"
    },
    {
        tag: "Manifesto",
        title: "Concept Over Form",
        content: "Every project starts with a core concept. We don't just build; we craft narratives that strengthen brand identities.",
        img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
    },
    {
        tag: "Delivery",
        title: "Artifact Excellence",
        content: "Our work thrives where the user interacts. We focus on the final digital product as the primary habitat for your brand.",
        img: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2668&auto=format&fit=crop"
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
        <section ref={containerRef} className="py-40 px-6 bg-white overflow-hidden">
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
                            <span className="text-[11px] font-bold uppercase tracking-[0.8em] text-zinc-400 mb-8 block">
                                System // Philosophy
                            </span>
                            <h2 className="text-6xl font-black md:text-7xl lg:text-[7rem] leading-[0.8] tracking-tighter text-black mb-12 relative z-10">
                                DRIVEN BY <br />
                                <motion.span
                                    style={{ rotate, WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}
                                    className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-white italic"
                                >
                                    PURPOSE
                                </motion.span>
                            </h2>
                        </motion.div>

                        {/* Interactive Image Display */}
                        <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl mt-auto">
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
                                        className="object-cover"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Scrollable Column */}
                    <div className="flex flex-col gap-40 lg:pt-32 pb-32">
                        {philosophy.map((item, index) => (
                            <motion.div
                                key={item.tag}
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                                onViewportEnter={() => setActiveCard(index)}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative pl-8 border-l border-zinc-200 hover:border-black transition-colors duration-500"
                            >
                                <span className="mb-6 block text-xs font-bold uppercase tracking-[0.4em] text-zinc-400 group-hover:text-black transition-colors">
                                    {item.tag}
                                </span>
                                <h3 className="mb-8 text-4xl md:text-5xl font-black tracking-tighter text-black">
                                    {item.title}
                                </h3>
                                <p className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed max-w-lg">
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
