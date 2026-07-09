"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Work } from "@/components/work";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function WorkPage() {
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
              Selected work
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-4xl font-display text-5xl leading-[0.98] tracking-tight text-ink md:text-8xl"
            >
              Things we've <span className="display-italic text-ink-soft">built.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-xl text-lg text-ink-soft"
            >
              Websites &amp; apps. New work lands here as we ship it.
            </motion.p>
          </div>
        </section>

        <Work />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
