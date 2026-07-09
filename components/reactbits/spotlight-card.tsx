"use client";

/**
 * SpotlightCard — adapted from ReactBits (reactbits.dev), MIT.
 * A soft radial glow follows the cursor across the card on hover.
 */
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
};

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(47, 107, 255, 0.18)",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={handleMove} className={`group relative overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle 220px at var(--x) var(--y), ${spotlightColor}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
