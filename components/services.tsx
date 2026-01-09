"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
    {
        title: "Branding",
        description: "Developing visual systems that resonate across all digital touchpoints."
    },
    {
        title: "Web Experience",
        description: "Engineering high-speed, interactive platforms with uncompromising precision."
    },
    {
        title: "Digital Growth",
        description: "Concept-driven marketing designed to amplify presence and impact."
    }
];

export function Services() {
    const containerRef = useRef<HTMLElement>(null);

    return (
        <section ref={containerRef} className="bg-white py-40">
            <div className="px-6 mb-40 flex flex-col items-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[11px] font-bold uppercase tracking-[0.6em] text-zinc-400 mb-8"
                >
                    Expertise & Craft
                </motion.span>
                <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center text-6xl font-black md:text-8xl lg:text-9xl tracking-[-0.05em] leading-[0.85] text-black"
                >
                    DRIVING THE <br />
                    <span className="italic text-zinc-200" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.05)" }}>FUTURE</span>
                </motion.h2>
            </div>

            <div className="flex flex-col gap-px bg-zinc-100 border-y border-zinc-100">
                {services.map((service, index) => (
                    <ServiceItem key={service.title} service={service} index={index} />
                ))}
            </div>
        </section>
    );
}

function ServiceItem({ service, index }: { service: typeof services[0], index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const textX = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -100 : 100, index % 2 === 0 ? 100 : -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className="relative flex h-[50vh] md:h-[60vh] w-full items-center justify-center overflow-hidden bg-white group"
        >
            <div className="relative z-10 flex flex-col items-center text-center px-6">
                <motion.h3
                    style={{ x: textX }}
                    className="text-6xl font-black uppercase tracking-tighter md:text-9xl lg:text-[10rem] text-black transition-all group-hover:scale-105"
                >
                    {service.title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 max-w-lg text-lg font-light text-zinc-500 md:text-2xl"
                >
                    {service.description}
                </motion.p>
            </div>

            <div className="absolute right-10 md:right-20 top-10 md:top-20 z-0">
                <span className="text-4xl font-black text-black/[0.03] md:text-[15rem] italic leading-none">0{index + 1}</span>
            </div>
        </motion.div>
    );
}
