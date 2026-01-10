"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export function ContactCTA() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={ref} id="contact" className="relative py-40 md:py-80 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        style={{ y: textY }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="z-10 max-w-4xl"
                    >
                        <h2 className="text-7xl font-black md:text-[12rem] lg:text-[15rem] tracking-[-0.05em] leading-[0.8] text-black">
                            LET&apos;S <br />
                            <span className="italic text-zinc-200" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.05)" }}>COLLABORATE</span>
                        </h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-16 text-xl font-light leading-relaxed text-zinc-600 md:text-3xl max-w-2xl mx-auto"
                        >
                            We're building the next generation of digital legacies. Join the frontier and architect your evolution.
                        </motion.p>
                        <div className="mt-20 flex flex-col items-center gap-12">
                            <Link
                                href="/contact"
                                className="group relative inline-flex h-24 items-center justify-center rounded-full bg-black px-24 text-[13px] font-black uppercase tracking-[0.3em] text-white transition-all hover:scale-105"
                            >
                                <span className="relative z-10 transition-transform group-hover:-translate-y-1">Initialize Protocol</span>
                                <motion.div
                                    className="absolute inset-0 bg-zinc-800"
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </Link>

                            <div className="flex gap-12 text-sm font-medium tracking-widest uppercase text-zinc-500">
                                <a href="mailto:hello@fubes.com" className="hover:text-black transition-colors">
                                    hello@fubes.com
                                </a>
                                <span className="text-zinc-300">•</span>
                                <a href="tel:+15550000000" className="hover:text-black transition-colors">
                                    +1 (555) 000-0000
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-1/2 -track-tighter -translate-x-1/2 -translate-y-1/2 text-[45rem] font-black text-black/[0.01] pointer-events-none select-none">
                PROTOCOL
            </div>
        </section>
    );
}
