import { useRef } from "react";
import type { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { icons } from "../../lib/icons";
import { Container } from "./Container";
import { EASE } from "../motion/ease";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

interface PageHeroProps {
  kicker: string;
  title: string;
  subtitle?: string;
  image?: string;
}

// Editorial banner: back link top-left, then generous open space, then a
// large title with a short tag line, sitting in the lower half of the
// image with real breathing room below it before the section ends —
// mirrors the UNTourism "Gastronomie" banner proportions (~554px tall at
// 1440px width, title occupying the lower-middle third).
export function PageHero({ kicker, title, subtitle, image, children }: PropsWithChildren<PageHeroProps>) {
  const navigate = useNavigate();
  // Background drifts down and the copy fades as the banner scrolls away.
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const copyOpacity = useTransform(scrollYProgress, [0.4, 0.9], [1, 0.2]);

  return (
    <section ref={sectionRef} className="relative flex h-[400px] flex-col overflow-hidden bg-ink-800 sm:h-[480px] lg:h-[560px]">
      {image && (
        <motion.div className="absolute inset-0" style={reduce ? undefined : { y: imageY }}>
          <motion.img
            src={image}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: EASE }}
          />
          <div className="absolute inset-0 bg-ink-900/55" />
        </motion.div>
      )}

      <Container className="relative pt-8 sm:pt-12">
        <motion.button
          {...rise(0.1)}
          type="button"
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-sm font-semibold text-surface-50/85 hover:text-surface-50"
        >
          <FontAwesomeIcon icon={icons.chevronLeft} className="text-xs" />
          <span className="transition-transform duration-200 group-hover:-translate-x-1">Back</span>
        </motion.button>
      </Container>

      <div className="flex-1" />

      <Container className="relative pb-10 sm:pb-14 lg:pb-16">
        <motion.div className="flex flex-col gap-3" style={reduce ? undefined : { opacity: copyOpacity }}>
          <motion.h1
            {...rise(0.2)}
            className="max-w-4xl font-display text-4xl font-bold leading-[1.05] text-surface-50 text-balance sm:text-5xl lg:text-7xl">
            {title}
          </motion.h1>
          <motion.span {...rise(0.35)} className="flex items-center gap-3 text-sm font-semibold text-surface-100/80">
            <motion.span
              aria-hidden
              className="h-0.5 w-10 origin-left bg-primary-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
            />
            {kicker}
          </motion.span>
          {subtitle && (
            <motion.p {...rise(0.45)} className="max-w-xl pt-1 text-sm leading-relaxed text-surface-100/70">
              {subtitle}
            </motion.p>
          )}
          {children && <motion.div {...rise(0.55)}>{children}</motion.div>}
        </motion.div>
      </Container>
    </section>
  );
}
