"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_LINK, LINKEDIN_URL } from "./contact-cta";

const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "WhatsApp", href: WHATSAPP_LINK },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper px-5 pt-20 pb-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-3xl tracking-tight text-ink">Fubbes</span>
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            </div>
            <p className="mt-4 max-w-sm text-base leading-7 text-ink-soft">
              A small studio building websites and mobile apps for ambitious brands.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 inline-block font-display text-2xl font-semibold tracking-tight text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink md:text-3xl"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="md:col-span-3">
            <span className="eyebrow">Menu</span>
            <ul className="mt-5 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-ink-soft transition-colors hover:text-ink">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="eyebrow">Elsewhere</span>
            <ul className="mt-5 space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft transition-colors hover:text-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="mt-20 overflow-hidden">
          <h2 className="select-none font-display text-[24vw] leading-[0.8] tracking-tight text-ink/[0.08]">
            Fubbes
          </h2>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-sm text-ink-soft md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Fubbes. All rights reserved.</span>
          <span className="font-display text-base font-medium italic">Thirukkumaran &amp; Anbu Arasu</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            Back to top
            <span className="grid h-6 w-6 place-items-center rounded-full border border-line transition-colors group-hover:border-ink">
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
