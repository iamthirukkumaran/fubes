"use client";
 
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
 
export function Preloader() {
    const [percent, setPercent] = useState(0);
    const [complete, setComplete] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem("fubes-loaded");
        if (hasLoaded) {
            setComplete(true);
            setShow(false);
            return;
        }
        
        setShow(true);

        // Prevent scrolling while loading
        document.body.style.overflow = "hidden";

        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setComplete(true);
                        setShow(false);
                        sessionStorage.setItem("fubes-loaded", "true");
                        document.body.style.overflow = "";
                    }, 500); 
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15) + 1;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    if (!show) return null;

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
                >
                    <div className="flex flex-col items-center">
                        <motion.span
                            className="text-9xl font-black tracking-tighter font-montserrat"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {Math.min(percent, 100)}%
                        </motion.span>
                        <div className="mt-4 h-[2px] w-64 overflow-hidden bg-white/10">
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
