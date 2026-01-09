"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { AboutContent } from "@/components/about-content";
import { Founder } from "@/components/founder";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-black text-white selection:bg-white selection:text-black font-inter">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        {/* Section 01: Hero (Black) */}
        <Hero />

        {/* Section 02: Services (Black with cinematic image reveals) */}
        <Services />

        {/* Section 03: Selected Work (White - Flipping the palette) */}
        <Work />

        {/* Section 04: Philosophy (White) */}
        <AboutContent />

        {/* Section 05: Founder (Black - Flipping back) */}
        <Founder />

        {/* Section 06: Contact (White - The provided collaborate image section) */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
