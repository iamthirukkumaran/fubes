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
        <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-line text-[10px] font-medium tabular-nums text-ink-soft">
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
      {note && <p className="mt-3 handwritten text-2xl text-blue">{note}</p>}
    </motion.div>
  );
}
