"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Work } from "@/components/work";
import { Footer } from "@/components/footer";

export default function WorkPage() {
    return (
        <div className="relative min-h-screen bg-black">
            <Navbar />
            <main className="pt-20">
                <section className="px-6 py-40 bg-black">
                    <div className="mx-auto max-w-7xl">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[15vw] font-black md:text-[12rem] lg:text-[16rem] tracking-[-0.05em] leading-[0.8] text-white"
                        >
                            SELECTED <br />
                            <span className="italic text-zinc-900" style={{ WebkitTextStroke: "1px #333" }}>ARCHIVE</span>
                        </motion.h1>
                    </div>
                </section>

                <Work />
            </main>
            <Footer />
        </div>
    );
}
