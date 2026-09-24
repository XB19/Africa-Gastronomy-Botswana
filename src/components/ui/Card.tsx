import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { EASE } from "../motion/ease";

export function Card({
  children,
  className = "",
  hover = true,
}: PropsWithChildren<{ className?: string; hover?: boolean }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`border border-ink-800/8 bg-white ${
        hover
          ? "transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-ink-900/8"
          : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Badge({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 bg-primary-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-700 ${className}`}
    >
      {children}
    </span>
  );
}
