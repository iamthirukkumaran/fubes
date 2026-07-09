"use client";

/**
 * StarBorder — adapted from ReactBits (reactbits.dev), MIT.
 * A pill with two glowing gradients travelling around its border.
 */
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  color?: string;
  speed?: string;
  className?: string;
};

export default function StarBorder({
  href,
  children,
  color = "#2f6bff",
  speed = "5s",
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`relative inline-block overflow-hidden rounded-full py-[1px] transition-transform hover:-translate-y-0.5 ${className}`}
    >
      <div
        className="star-movement-bottom absolute bottom-[-11px] right-[-250%] z-0 h-[50%] w-[300%] rounded-full opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="star-movement-top absolute left-[-250%] top-[-11px] z-0 h-[50%] w-[300%] rounded-full opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-10 rounded-full border border-ink/10 bg-ink px-8 py-4 text-center text-sm text-paper">
        {children}
      </div>
    </Link>
  );
}
