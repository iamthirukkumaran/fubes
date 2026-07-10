"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Clock3,
  Mail,
  MessageCircle,
  SendHorizonal,
  Sparkles,
  Linkedin,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_LINK, LINKEDIN_URL } from "@/components/contact-cta";

const ease = [0.16, 1, 0.3, 1] as const;

const PROJECT_TYPES = ["Website", "Mobile app", "Design", "Backend"];
const BUDGETS = ["Under ₹50k", "₹50k–2L", "₹2L–5L", "5L+", "Not sure yet"];

const contactDetails = [
  {
    title: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
    accent: "bg-blue/10 text-blue",
  },
  {
    title: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: WHATSAPP_LINK,
    icon: MessageCircle,
    accent: "bg-lime/10 text-[color:var(--color-lime)]",
  },
  {
    title: "LinkedIn",
    value: "Thirukkumaran R",
    href: LINKEDIN_URL,
    icon: Linkedin,
    accent: "bg-coral/10 text-coral",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [types, setTypes] = useState<string[]>([]);
  const [budget, setBudget] = useState("");

  const toggleType = (t: string) =>
    setTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n` +
        `Looking for: ${types.length ? types.join(", ") : "Not specified"}\n` +
        `Budget: ${budget || "Not specified"}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page-shell relative min-h-screen overflow-hidden bg-paper">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(47,107,255,0.12),_transparent_45%)]" />
      <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-coral/10 blur-3xl" />

      <Navbar />
      <main>
        <section className="px-5 pt-40 pb-10 md:px-8 md:pt-52 md:pb-14">
          <div className="mx-auto max-w-7xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="mt-5 max-w-4xl font-display text-5xl leading-[0.96] tracking-[-0.03em] text-ink md:text-7xl lg:text-8xl"
            >
              Let&apos;s shape <span className="text-blue">something lasting.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="section-copy mt-6 max-w-2xl"
            >
              Tell us what you&apos;re building and we&apos;ll help you turn it into a polished digital experience with clarity, speed, and care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-2 text-sm font-medium text-ink shadow-[0_8px_24px_rgba(13,13,13,0.04)]">
                <Sparkles className="h-4 w-4 text-blue" />
                Usually replies within one business day
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-2 text-sm font-medium text-ink-soft shadow-[0_8px_24px_rgba(13,13,13,0.04)]">
                <Clock3 className="h-4 w-4" />
                Remote collaboration, worldwide
              </span>
            </motion.div>
          </div>
        </section>

        <section className="px-5 pb-28 md:px-8 md:pb-40">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className="space-y-4"
            >
              <div className="surface-card p-6 md:p-7">
                <div className="eyebrow">Contact</div>
                <h2 className="mt-3 font-display text-2xl tracking-tight text-ink md:text-3xl">
                  Start with a simple message.
                </h2>
                <p className="mt-3 text-base leading-7 text-ink-soft">
                  Share what you need and we&apos;ll get back to you with a clear next step.
                </p>
              </div>

              <div className="space-y-3">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="surface-card flex items-center gap-4 p-4 transition-transform hover:-translate-y-0.5"
                    >
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${item.accent}`}>
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">{item.title}</div>
                        <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className="surface-card space-y-6 p-6 md:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="eyebrow">Project enquiry</div>
                    <h2 className="mt-2 font-display text-3xl tracking-tight text-ink md:text-4xl">
                      Tell us about your idea.
                    </h2>
                  </div>
                  <span className="hidden rounded-full border border-line bg-paper/80 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-ink-soft md:inline-flex">
                    Free intro
                  </span>
                </div>
                <p className="mt-3 text-base leading-7 text-ink-soft">
                  Share your goals and we&apos;ll shape a plan that feels clear, considered, and realistic.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow">Your name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="mt-3 w-full rounded-2xl border border-line bg-paper px-4 py-3.5 text-base text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow">Your email</label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="mt-3 w-full rounded-2xl border border-line bg-paper px-4 py-3.5 text-base text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <span className="eyebrow">What do you need?</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((t) => {
                    const on = types.includes(t);
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleType(t)}
                        aria-pressed={on}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                          on
                            ? "border-ink bg-ink text-paper"
                            : "border-line bg-paper text-ink-soft hover:border-ink hover:text-ink"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="eyebrow">Rough budget</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {BUDGETS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b === budget ? "" : b)}
                      aria-pressed={b === budget}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                        b === budget
                          ? "border-blue bg-blue text-paper"
                          : "border-line bg-paper text-ink-soft hover:border-ink hover:text-ink"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow">About the project</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What are you building, and what do you need help with?"
                  className="mt-3 w-full resize-none rounded-2xl border border-line bg-paper px-4 py-3.5 text-base text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-4 border-t border-line pt-4 md:flex-row md:items-center md:justify-between">
                <p className="text-sm leading-6 text-ink-soft">
                  This opens your email app with the message ready to send.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
                >
                  Send enquiry
                  <SendHorizonal className="h-4 w-4" />
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
