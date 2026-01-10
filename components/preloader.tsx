"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
    const [percent, setPercent] = useState(0);
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        // Prevent scrolling while loading
        if (!complete) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setComplete(true), 500); // Wait a bit at 100%
                    return 100;
                }
                // Random increment for organic feel
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [complete]);

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
                >
                    <div className="flex flex-col items-center">
                        <motion.span
                            className="text-9xl font-black tracking-tighter"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {Math.min(percent, 100)}%
                        </motion.span>
                        <div className="mt-4 h-1 w-64 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                                className="h-full bg-white"
                                initial={{ width: 0 }}
                                animate={{ width: `${percent}%` }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
