"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const active = hovered ?? pathname;

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-[90] flex justify-center px-4 md:top-5">
        <div className="flex w-full max-w-4xl items-center justify-between gap-2 rounded-full border border-line/80 bg-paper/80 py-2 pl-5 pr-2 shadow-[0_16px_44px_rgba(13,13,13,0.06)] backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1.5">
            <span className="font-display text-xl font-bold tracking-tight text-ink">Fubbes</span>
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          </Link>

          {/* Desktop links with sliding highlight */}
          <nav
            onMouseLeave={() => setHovered(null)}
            className="hidden items-center md:flex"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium tracking-[0.01em] transition-colors",
                  active === link.href ? "text-ink" : "text-ink-soft"
                )}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-0 rounded-full bg-ink/[0.06]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="group hidden items-center gap-1.5 rounded-full bg-ink py-2.5 pl-5 pr-4 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 md:inline-flex"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] flex flex-col bg-paper px-6 py-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-baseline gap-1.5">
                <span className="font-display text-xl font-bold">Fubbes</span>
                <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-14 flex flex-col">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="border-b border-line"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 font-display text-4xl font-bold tracking-tight text-ink"
                  >
                    {link.label}
                    <ArrowUpRight className="h-7 w-7 text-ink-soft" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-6 py-4 text-sm text-paper"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
