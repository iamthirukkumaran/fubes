"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
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
                            EXPERTISE <br />
                            <span className="italic text-zinc-100">SYSTEMS</span>
                        </motion.h1>
                    </div>
                </section>

                <Services />
            </main>
            <Footer />
        </div>
    );
}
