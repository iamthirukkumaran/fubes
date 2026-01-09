"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="relative bg-black pt-40 pb-20 px-6 overflow-hidden">
            {/* Background Text Overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none select-none">
                <h2 className="text-[25rem] md:text-[40rem] font-black tracking-tighter text-white">FUBES</h2>
            </div>

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="grid gap-20 lg:grid-cols-2 lg:gap-40">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/" className="mb-14 block font-montserrat text-5xl font-black tracking-tighter text-white md:text-8xl">
                                FUBES<span className="text-zinc-800">.</span>
                            </Link>
                            <p className="max-w-md text-2xl font-light leading-relaxed text-zinc-500">
                                A digital design agency crafting artifacts for a future-first world.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid gap-20 sm:grid-cols-2">
                        {[
                            {
                                title: "Laboratory",
                                links: [
                                    { label: "Our Work", href: "/work" },
                                    { label: "Expertise", href: "/services" },
                                    { label: "The Studio", href: "/studio" }
                                ]
                            },
                            {
                                title: "Network",
                                links: [
                                    { label: "Instagram", href: "#" },
                                    { label: "LinkedIn", href: "#" },
                                    { label: "Behance", href: "#" }
                                ]
                            }
                        ].map((col, i) => (
                            <motion.div
                                key={col.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <h4 className="mb-12 text-[11px] font-bold uppercase tracking-[0.6em] text-white">
                                    {col.title}
                                </h4>
                                <ul className="space-y-8">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-2xl font-light text-zinc-500 hover:text-white transition-all duration-500 hover:translate-x-2 inline-block"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-60 flex flex-col items-center justify-between gap-12 border-t border-zinc-900 pt-16 md:flex-row">
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-800">
                            EST. 2024 • FUBES DESIGN STUDIO
                        </p>
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-900">
                            © {new Date().getFullYear()} ALL RIGHTS RESERVED
                        </p>
                    </div>
                    <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-800">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-black transition-colors">Legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
