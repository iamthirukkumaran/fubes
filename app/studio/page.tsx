"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { AboutContent } from "@/components/about-content";
import { Founder } from "@/components/founder";
import { Footer } from "@/components/footer";

export default function StudioPage() {
    return (
        <div className="relative min-h-screen bg-white">
            <Navbar />
            <main className="pt-20">
                <section className="px-6 py-40 bg-white">
                    <div className="mx-auto max-w-7xl">
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[15vw] font-black md:text-[12rem] lg:text-[16rem] tracking-[-0.05em] leading-[0.8] text-black"
                        >
                            STUDIO <br />
                            <span className="italic text-zinc-200" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.05)" }}>VISION</span>
                        </motion.h1>
                    </div>
                </section>

                <AboutContent />
                <Founder />
            </main>
            <Footer />
        </div>
    );
}
