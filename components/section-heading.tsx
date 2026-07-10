"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  note?: React.ReactNode;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  note,
  className,
  titleClassName,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}
      className={className}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-line bg-paper/80 text-[10px] font-semibold tabular-nums text-ink-soft shadow-[0_6px_16px_rgba(13,13,13,0.04)]">
          {index}
        </span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2
        className={cn(
          "mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-ink md:text-6xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {note && <p className="mt-3 text-base font-medium leading-7 text-ink-soft">{note}</p>}
    </motion.div>
  );
}
