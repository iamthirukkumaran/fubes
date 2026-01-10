"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ClientLogos } from "@/components/client-logos";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { AboutContent } from "@/components/about-content";
import { Testimonials } from "@/components/testimonials";
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
    <div className="relative bg-black text-white selection:bg-white selection:text-black font-inter overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        {/* Section 01: Hero (Kinetic) */}
        <Hero />

        {/* Section 01b: Social Proof */}
        <ClientLogos />

        {/* Section 02: Services (Interactive List) */}
        <Services />

        {/* Section 03: Selected Work (Horizontal Scroll) */}
        <Work />

        {/* Section 04: Philosophy (White) */}
        <AboutContent />

        {/* Section 04b: Testimonials (Validation) */}
        <Testimonials />

        {/* Section 05: Founder (Black) */}
        <Founder />

        {/* Section 06: Contact */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
