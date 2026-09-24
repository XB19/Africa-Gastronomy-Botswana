import { motion } from "framer-motion";
import { EASE } from "../motion/ease";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <motion.div
      className={`flex flex-col gap-2.5 ${alignClass} ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {kicker && (
        <motion.span
          variants={item}
          className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] ${
            light ? "text-primary-300" : "text-primary-600"
          }`}
        >
          <motion.span
            aria-hidden
            className={`h-0.5 w-8 origin-left ${light ? "bg-primary-300" : "bg-primary-500"}`}
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.8, ease: EASE, delay: 0.1 } },
            }}
          />
          {kicker}
        </motion.span>
      )}
      <motion.h2
        variants={item}
        className={`font-display text-3xl sm:text-4xl font-bold leading-[1.12] text-balance ${
          light ? "text-surface-50" : "text-ink-800"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={item}
          className={`max-w-2xl text-base leading-relaxed ${
            light ? "text-surface-100/80" : "text-ink-500"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
