"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/studio" },
    { label: "Design House", href: "/services", badge: "New" },
    { label: "Contact", href: "/contact" },
    { label: "Talk", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            {/* Standard Navbar - Visible only at top */}
            <motion.header
                initial={{ y: 0, opacity: 1 }}
                animate={{
                    y: isScrolled ? -100 : 0,
                    opacity: isScrolled ? 0 : 1
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-6 left-0 right-0 z-[90] flex justify-center px-6"
            >
                <nav className="relative flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-2xl shadow-2xl">
                    <Link href="/" className="flex items-center px-4 py-2 group mr-4">
                        <span className="font-montserrat text-lg font-black tracking-tighter text-white">
                            FUBES<span className="text-zinc-500">.</span>
                        </span>
                    </Link>

                    <div className="hidden items-center gap-1 md:flex text-white">
                        {links.slice(0, 4).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "group relative px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-300",
                                    pathname === link.href ? "text-white" : "text-zinc-400 hover:text-white"
                                )}
                            >
                                <span className="relative z-10">{link.label}</span>
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="nav-active-main"
                                        className="absolute inset-0 z-0 rounded-full bg-white/10"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/contact"
                        className="group relative ml-4 overflow-hidden rounded-full bg-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-black transition-all duration-500 hover:scale-105"
                    >
                        <span className="relative z-10">Talk</span>
                        <div className="absolute inset-0 z-0 -translate-x-full bg-zinc-200 transition-transform duration-500 group-hover:translate-x-0" />
                    </Link>
                </nav>
            </motion.header>

            {/* Plus Button - Visible on scroll */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: isScrolled && !isOpen ? 1 : 0,
                    opacity: isScrolled && !isOpen ? 1 : 0
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed top-8 right-8 z-[100] h-16 w-16 items-center justify-center rounded-full bg-white shadow-2xl flex mix-blend-difference"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mix-blend-difference"
                >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </motion.button>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, scale: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, scale: 1.05, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[200] bg-black overflow-hidden"
                    >
                        {/* Background Texture/Noise */}
                        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

                        <div className="relative h-full w-full p-8 md:p-24">
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 h-full items-start">
                                {/* Left: Logo/Branding */}
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="pt-2"
                                >
                                    <Link href="/" onClick={() => setIsOpen(false)} className="group">
                                        <h2 className="font-montserrat text-3xl md:text-5xl font-black tracking-tighter text-white">
                                            FUBES
                                            <span className="text-zinc-700 block text-[10px] tracking-[0.5em] mt-3 group-hover:text-white transition-colors">DESIGN STUDIO</span>
                                        </h2>
                                    </Link>
                                </motion.div>

                                {/* Middle-Right: Main Navigation */}
                                <div className="flex flex-col gap-2 md:pr-12 lg:pr-32">
                                    {links.map((link, i) => (
                                        <motion.div
                                            key={link.label}
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            className="flex items-center gap-4"
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="group relative flex items-baseline text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white transition-all hover:text-zinc-400 leading-[1.1]"
                                            >
                                                <span className="relative z-10">{link.label}</span>
                                                {link.badge && (
                                                    <span className={cn(
                                                        "ml-4 px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-widest self-center",
                                                        link.badge === "New" ? "bg-lime-400 text-black" : "bg-zinc-800 text-zinc-400"
                                                    )}>
                                                        {link.badge}
                                                    </span>
                                                )}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Far Right: Close & Socials */}
                                <div className="flex flex-col items-end pt-2">
                                    <motion.button
                                        initial={{ scale: 0, rotate: -90 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        onClick={() => setIsOpen(false)}
                                        className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-xl mb-12 md:mb-24"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </motion.button>

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 }}
                                        className="flex flex-col gap-4 text-right"
                                    >
                                        <Link href="#" className="text-xl md:text-2xl font-bold text-white hover:text-zinc-400 transition-colors uppercase tracking-tighter">Instagram</Link>
                                        <Link href="#" className="text-xl md:text-2xl font-bold text-white hover:text-zinc-400 transition-colors uppercase tracking-tighter">LinkedIn</Link>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Footer Line */}
                            <div className="absolute bottom-12 left-12 right-12 h-px bg-white/10" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
