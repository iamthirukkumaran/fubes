"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ceo from "../assets/ceo.png";

export function Founder() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax and scale effects
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.05]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

    return (
        <section
            ref={containerRef}
            id="founder"
            className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center py-24"
        >
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-zinc-900/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-zinc-800/10 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            {/* Kinetic Background Text */}
            <div className="absolute inset-0 overflow-hidden opacity-[0.02] select-none pointer-events-none">
                <motion.div
                    style={{ y: backgroundY }}
                    className="flex flex-col gap-0 leading-[0.7]"
                >
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="text-[25vw] font-black whitespace-nowrap tracking-tighter">
                            VISIONARY LEADERSHIP ARCHITECT VISIONARY
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="container relative mx-auto px-6 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-4 items-center">

                    {/* Visual Pillar */}
                    <div className="lg:col-span-5 relative group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 100 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            style={{ scale: imageScale, rotate: imageRotate }}
                            className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-zinc-800/50 shadow-2xl"
                        >
                            <Image
                                src={ceo}
                                alt="Thirukkumaran - Founder"
                                fill
                                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                priority
                                placeholder="blur"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        </motion.div>

                        {/* Floating Credential */}
                        <motion.div
                            initial={{ x: -40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="absolute -bottom-6 -left-4 lg:-left-12 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 p-8 rounded-lg shadow-2xl max-w-[280px]"
                        >
                            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block">The Founder</span>
                            <h3 className="text-2xl font-black text-white mb-2 italic">Thirukkumaran</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                Architecting the digital frontier through minimalist precision.
                            </p>
                        </motion.div>
                    </div>

                    {/* Content Pillar */}
                    <div className="lg:col-span-7 space-y-12 lg:pl-12">
                        <div className="overflow-hidden">
                            <motion.span
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                className="inline-block text-zinc-500 text-[11px] font-bold uppercase tracking-[0.8em] mb-8"
                            >
                                Direction // 05
                            </motion.span>

                            <motion.h2
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter"
                            >
                                THE <br />
                                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>VISION</span> <br />
                                UNTOLD.
                            </motion.h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 1 }}
                            className="max-w-xl border-l-2 border-zinc-800 pl-8"
                        >
                            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                                Fubes isn&apos;t just a studio; it&apos;s a manifesto. Under Thirukkumaran&apos;s direction, we strip away the noise to find the <span className="text-white font-medium italic">essential truth</span> of every brand.
                            </p>
                        </motion.div>

                        {/* Interactive Stats Grid */}
                        <div className="grid grid-cols-2 gap-12 pt-12">
                            {[
                                { val: "100+", label: "Digital Artifacts", delay: 0.4 },
                                { val: "50+", label: "Global Allies", delay: 0.5 }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: stat.delay }}
                                    className="group cursor-default"
                                >
                                    <div className="text-5xl md:text-7xl font-black text-white mb-2 group-hover:translate-x-2 transition-transform duration-500">
                                        {stat.val}
                                    </div>
                                    <div className="w-12 h-[2px] bg-zinc-800 group-hover:w-24 transition-all duration-500 mb-2" />
                                    <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Decorative Corner Element */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-80 h-80 border border-zinc-900 rounded-full"
            />
        </section>
    );
}
