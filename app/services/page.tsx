"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-paper">
      <Navbar />
      <main>
        <section className="px-5 pt-40 pb-8 md:px-8 md:pt-52 md:pb-12">
          <div className="mx-auto max-w-7xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-4xl font-display text-5xl leading-[0.98] tracking-tight text-ink md:text-8xl"
            >
              From idea to <span className="display-italic text-ink-soft">launch.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-xl text-lg text-ink-soft"
            >
              Design, web, mobile &amp; backend. The whole stack.
            </motion.p>
          </div>
        </section>

        <Services />
        <Process />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
