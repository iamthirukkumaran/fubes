"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ClientLogos } from "@/components/client-logos";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { ColorBand } from "@/components/color-band";
import { AboutContent } from "@/components/about-content";
import { Process } from "@/components/process";
import { Team } from "@/components/founder";
import { Testimonials } from "@/components/testimonials";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative bg-paper text-ink">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-gradient-to-r from-blue via-violet to-coral"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <ClientLogos />
        <Services />
        <Work />
        <ColorBand />
        <AboutContent />
        <Process />
        <Team />
        <Testimonials />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
