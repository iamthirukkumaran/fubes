"use client";

/**
 * GradientText — adapted from ReactBits (reactbits.dev), MIT.
 * Text filled with an animated moving gradient.
 */
type Props = {
  children: React.ReactNode;
  colors?: string[];
  className?: string;
};

export default function GradientText({
  children,
  colors = ["#2f6bff", "#8b5cf6", "#ff5a3c", "#38c66b", "#2f6bff"],
  className = "",
}: Props) {
  return (
    <span
      className={`gradient-text ${className}`}
      style={{ backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})` }}
    >
      {children}
    </span>
  );
}
