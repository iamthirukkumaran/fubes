"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("fubbes-loaded")) {
      setComplete(true);
      setShow(false);
      return;
    }

    setShow(true);
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setComplete(true);
            setShow(false);
            sessionStorage.setItem("fubbes-loaded", "true");
            document.body.style.overflow = "";
          }, 400);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 12) + 3, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-paper text-ink"
        >
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-5xl tracking-tight md:text-6xl">Fubbes</span>
            <span className="h-2 w-2 rounded-full bg-coral" />
          </div>
          <div className="mt-8 h-px w-56 overflow-hidden bg-line">
            <motion.div
              className="h-full bg-ink"
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <span className="mt-4 font-inter text-sm text-ink-soft">
            {Math.min(percent, 100)}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
