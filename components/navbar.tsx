"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/studio" },
    { label: "Design House", href: "/services", badge: "New" },
    { label: "Contact", href: "/contact" },
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
                className="fixed top-4 md:top-6 left-0 right-0 z-[90] flex justify-center px-4 md:px-6 mix-blend-difference"
            >
                {/* Logo - Separated on Left */}
                <Link href="/" className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 group">
                    <span className="font-montserrat text-lg font-black tracking-tighter text-white">
                        FUBES<span className="text-zinc-500">.</span>
                    </span>
                </Link>

                <nav className="relative flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-3 py-2 backdrop-blur-md">
                    <div className="hidden items-center gap-1 md:flex text-white">
                        {links.slice(0, 4).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "group relative px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-300",
                                    pathname === link.href ? "text-white opacity-100" : "text-white/70 hover:text-white"
                                )}
                            >
                                <span className="relative z-10">{link.label}</span>
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="nav-active-main"
                                        className="absolute inset-0 z-0 rounded-full bg-white/20"
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
                        <div className="absolute inset-0 z-0 -translate-x-full bg-black transition-transform duration-500 group-hover:translate-x-0" />
                        <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">Talk</span>
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
                <div className="relative h-4 w-4">
                    <span className="absolute top-1/2 left-0 h-[2px] w-full bg-black -translate-y-1/2" />
                    <span className="absolute left-1/2 top-0 w-[2px] h-full bg-black -translate-x-1/2" />
                </div>
            </motion.button>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[200] bg-zinc-950 text-white overflow-hidden"
                    >
                        <div className="relative h-full w-full p-8 md:p-24 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <Link href="/" onClick={() => setIsOpen(false)}>
                                    <h2 className="font-montserrat text-3xl font-black tracking-tighter">
                                        FUBES.
                                    </h2>
                                </Link>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="h-12 w-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-col gap-4">
                                {links.map((link, i) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="group flex items-center gap-4 text-5xl md:text-8xl font-black tracking-tighter hover:text-zinc-500 hover:italic transition-all"
                                        >
                                            <span className="group-hover:translate-x-4 transition-transform duration-300">
                                                {link.label}
                                            </span>
                                            {link.badge && (
                                                <span className={cn(
                                                    "px-3 py-1 text-xs md:text-sm font-bold rounded-full uppercase tracking-widest border",
                                                    link.badge === "New"
                                                        ? "bg-lime-400 text-black border-lime-400"
                                                        : "border-white/20 text-zinc-500"
                                                )}>
                                                    {link.badge}
                                                </span>
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex justify-between items-end border-t border-white/10 pt-8">
                                <span className="text-xs font-mono text-zinc-500">
                                    EST  2024
                                </span>
                                <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
                                    <a href="#" className="hover:text-zinc-400">Insta</a>
                                    <a href="#" className="hover:text-zinc-400">X / Twitter</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
