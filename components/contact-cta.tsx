"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hand, MessageCircle } from "lucide-react";

/* ── Real contact details — used across the whole site ── */
export const CONTACT_EMAIL = "fubes.fubbes@gmail.com";
export const WHATSAPP_DISPLAY = "+91 99440 33696";
export const WHATSAPP_LINK =
  "https://wa.me/919944033696?text=Hi%20Fubbes!%20I%27ve%20got%20a%20project%20in%20mind.";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/thirukkumaran-r-5752b71b4/";

const ease = [0.16, 1, 0.3, 1] as const;

export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line px-5 py-28 md:px-8 md:py-40">
      {/* playful floating blobs */}
      <div className="pointer-events-none absolute -left-16 top-20 h-40 w-40 rounded-full bg-lime/20 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 bottom-16 h-52 w-52 rounded-full bg-blue/20 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
        >
          <span className="sticker wiggle">
            <Hand className="h-4 w-4" strokeWidth={2} />
            say hi, we don&apos;t bite
          </span>
          <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] tracking-tight text-ink md:text-8xl">
            Got an idea? <br />
            <span className="display-italic">Let&apos;s make it </span>
            <span className="hl hl-coral">real.</span>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-8 text-ink-soft">
            Tell us what you&apos;re building. We respond with clarity, direction, and a thoughtful next step.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-ink px-8 py-4 text-sm text-paper transition-transform hover:-translate-y-0.5"
            >
              Start a project
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-lime bg-lime/10 px-8 py-4 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4 text-[color:var(--color-lime)]" strokeWidth={2} />
              WhatsApp us
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-2 text-sm text-ink"
            >
              <span className="border-b-2 border-ink/20 pb-0.5 transition-colors group-hover:border-ink">
                {CONTACT_EMAIL}
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
