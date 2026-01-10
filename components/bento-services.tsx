"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

const services = [
    {
        title: "Web Experience",
        description: "Immersive websites that tell your story.",
        icon: Globe,
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        title: "Brand Identity",
        description: "logos, colors, and systems that stick.",
        icon: ShieldCheck,
        colSpan: "col-span-1",
    },
    {
        title: "Development",
        description: "Clean, scalable code using modern stacks.",
        icon: Cpu,
        colSpan: "col-span-1",
    },
    {
        title: "Product Design",
        description: "UI/UX that converts and engages users.",
        icon: Zap,
        colSpan: "col-span-1 md:col-span-2",
    },
];

export function BentoServices() {
    return (
        <section className="relative bg-zinc-950 py-32 px-4 sm:px-6">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 md:text-5xl">
                        Our Expertise.
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-lg text-lg">
                        We provide a full-spectrum of digital services, meticulously crafted for ambitious brands.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                            className={`${service.colSpan} group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors`}
                        >
                            <div className="mb-8">
                                <service.icon className="h-8 w-8 text-zinc-400 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-zinc-400 text-sm">{service.description}</p>
                            </div>

                            {/* Decorative gradient blob */}
                            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
