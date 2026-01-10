"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote: "Fubes didn't just redesign our site; they reimagined our entire digital existence. The level of detail is terrifyingly good.",
        author: "Elena Sovora",
        role: "CMO at Continuum",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        quote: "We needed a partner who understood luxury in the digital age. Fubes delivered a masterpiece that elevated our brand valuation.",
        author: "Marcus Chen",
        role: "Founder of Onyx",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        quote: "Absolute precision. The kinetic typography and smooth interactions have doubled our session duration. Truly world-class.",
        author: "Sarah Jenkins",
        role: "Director at Aura",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    }
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="relative py-32 bg-zinc-50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                        Validation
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black text-black tracking-tight">
                        WHAT THEY SAY
                    </h2>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col md:flex-row gap-12 md:items-center"
                        >
                            <div className="relative md:w-2/3">
                                <Quote className="absolute -top-8 -left-8 w-16 h-16 text-black/5" />
                                <p className="text-3xl md:text-5xl font-medium leading-tight text-zinc-900">
                                    &ldquo;{testimonials[current].quote}&rdquo;
                                </p>
                            </div>

                            <div className="md:w-1/3 flex flex-col gap-4 border-l border-zinc-200 pl-8">
                                <div className="h-16 w-16 rounded-full overflow-hidden bg-zinc-200">
                                    <img
                                        src={testimonials[current].image}
                                        alt={testimonials[current].author}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-black">{testimonials[current].author}</h4>
                                    <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{testimonials[current].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="mt-16 flex gap-4">
                        <button
                            onClick={prev}
                            className="h-12 w-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={next}
                            className="h-12 w-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
