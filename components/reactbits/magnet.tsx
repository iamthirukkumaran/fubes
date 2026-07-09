"use client";

/**
 * Magnet — adapted from ReactBits (reactbits.dev), MIT.
 * Gently pulls its children toward the cursor when nearby.
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
};

export default function Magnet({
  children,
  padding = 80,
  strength = 0.4,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const { left, top, width, height } = el.getBoundingClientRect();
      const cx = left + width / 2;
      const cy = top + height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const inRange =
        Math.abs(dx) < width / 2 + padding && Math.abs(dy) < height / 2 + padding;
      if (inRange) setPos({ x: dx * strength, y: dy * strength });
      else setPos({ x: 0, y: 0 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [padding, strength]);

  return (
    <motion.div
      ref={ref}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
