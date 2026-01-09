"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ContactPage() {
    return (
        <div className="relative min-h-screen bg-black">
            <Navbar />
            <main className="pt-20">
                <section className="px-6 py-40">
                    <div className="mx-auto max-w-7xl">
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[15vw] font-black md:text-[8rem] lg:text-[12rem] tracking-tighter leading-[0.85] text-white"
                        >
                            LET'S <br />
                            <span className="italic text-zinc-900" style={{ WebkitTextStroke: "1px #333" }}>EVOLVE</span>
                        </motion.h1>
                    </div>
                </section>

                <section className="px-6 pb-40">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-20 lg:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-12"
                            >
                                <div className="space-y-4">
                                    <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-600">Inquiry</span>
                                    <p className="text-3xl font-light text-white md:text-5xl">hello@fubes.com</p>
                                </div>
                                <div className="space-y-4">
                                    <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-600">Presence</span>
                                    <p className="text-3xl font-light text-white md:text-5xl">Global // Remote</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-zinc-950 rounded-[40px] p-8 md:p-16 border border-zinc-900"
                            >
                                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">Identifier</label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full bg-transparent border-b border-zinc-800 py-4 text-2xl font-light text-white focus:outline-none focus:border-white transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">Gateway</label>
                                        <input
                                            type="email"
                                            placeholder="Your email address"
                                            className="w-full bg-transparent border-b border-zinc-800 py-4 text-2xl font-light text-white focus:outline-none focus:border-white transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">Message</label>
                                        <textarea
                                            placeholder="Describe the horizon"
                                            rows={4}
                                            className="w-full bg-transparent border-b border-zinc-800 py-4 text-2xl font-light text-white focus:outline-none focus:border-white transition-colors resize-none"
                                        />
                                    </div>
                                    <button className="h-24 w-full rounded-full bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform">
                                        Initialize Protocol
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
