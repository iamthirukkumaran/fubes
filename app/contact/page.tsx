"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Coffee, Zap } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_LINK, LINKEDIN_URL } from "@/components/contact-cta";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

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
              Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="mt-5 max-w-4xl font-display text-5xl leading-[0.98] tracking-tight text-ink md:text-8xl"
            >
              Let&apos;s build <span className="hl hl-blue">something.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="mt-6 inline-flex items-center gap-2 handwritten text-2xl text-coral"
            >
              <Coffee className="h-5 w-5" strokeWidth={2} />
              coffee&apos;s on us (virtually)
            </motion.p>
          </div>
        </section>

        <section className="px-5 pb-28 md:px-8 md:pb-40">
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-12 md:gap-16">
            {/* Details */}
            <div className="space-y-10 md:col-span-4">
              <div>
                <span className="eyebrow">Email</span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-3 block font-display text-2xl tracking-tight text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink md:text-3xl"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <span className="eyebrow">WhatsApp</span>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-lg text-ink underline decoration-lime decoration-2 underline-offset-4"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div>
                <span className="eyebrow">LinkedIn</span>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-lg text-ink underline decoration-blue decoration-2 underline-offset-4"
                >
                  Thirukkumaran R
                </a>
              </div>
              <div>
                <span className="eyebrow">Based in</span>
                <p className="mt-3 text-lg text-ink">Tamil Nadu, India · Working remotely</p>
              </div>
              <div>
                <span className="eyebrow">Response time</span>
                <p className="mt-3 inline-flex items-center gap-2 text-lg text-ink">
                  <Zap className="h-4 w-4 text-blue" strokeWidth={2} />
                  Within one business day
                </p>
              </div>
              <div>
                <span className="eyebrow">The team</span>
                <p className="mt-3 text-lg text-ink">
                  Thirukkumaran · Web &amp; Backend
                  <br />
                  Anbu Arasu · Mobile Apps
                </p>
              </div>
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="space-y-8 rounded-3xl border border-line bg-paper-2 p-7 md:col-span-8 md:p-12"
            >
              <div>
                <label className="eyebrow">Your name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="mt-3 w-full border-b border-line bg-transparent py-3 font-display text-2xl text-ink placeholder:text-ink/25 focus:border-ink focus:outline-none"
                />
              </div>
              <div>
                <label className="eyebrow">Your email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className="mt-3 w-full border-b border-line bg-transparent py-3 font-display text-2xl text-ink placeholder:text-ink/25 focus:border-ink focus:outline-none"
                />
              </div>
              <div>
                <label className="eyebrow">About the project</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What are you building, and what do you need help with?"
                  className="mt-3 w-full resize-none border-b border-line bg-transparent py-3 text-lg text-ink placeholder:text-ink/25 focus:border-ink focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-ink py-4 text-sm text-paper transition-transform hover:-translate-y-0.5 md:w-auto md:px-10"
              >
                Send enquiry
              </button>
              <p className="text-sm text-ink-soft">
                This opens your email app with the message ready to send.
              </p>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
