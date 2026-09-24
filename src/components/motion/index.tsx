import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { PropsWithChildren } from "react";
import {
  animate,
  inView,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
import { EASE } from "./ease";

interface RevealProps {
  className?: string;
  delay?: number;
  y?: number;
}

// Fades + lifts a block into place the first time it scrolls into view.
export function Reveal({ children, className = "", delay = 0, y = 28 }: PropsWithChildren<RevealProps>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  as?: "div" | "ul";
  className?: string;
  delay?: number;
  step?: number;
}

// Drop-in replacement for a grid/list wrapper: its direct children rise
// into place as each one scrolls into view, and children that enter together
// cascade one after another. Every child is observed on its own, so very tall
// grids (e.g. the full gallery) work as well as short ones. Children are
// animated as plain DOM nodes, so they can stay Links, cards, whatever.
// Children added after mount (tab/filter changes) appear without animation,
// unless the parent remounts the Stagger with a new `key`.
export function Stagger({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  step = 0.07,
}: PropsWithChildren<StaggerProps>) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const items = Array.from(el.children) as HTMLElement[];
    const reset = (item: HTMLElement) => {
      item.style.removeProperty("opacity");
      item.style.removeProperty("transform");
    };
    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(28px)";
    });

    let batchStart = 0;
    let batchIndex = 0;
    const stop = inView(
      items,
      (item) => {
        const now = performance.now();
        if (now - batchStart > 150) {
          batchStart = now;
          batchIndex = 0;
        }
        // Cap the cascade so big batches never leave items waiting long.
        const itemDelay = Math.min(delay + batchIndex++ * step, 0.6);
        animate(
          item,
          { opacity: [0, 1], transform: ["translateY(28px)", "translateY(0px)"] },
          { duration: 0.7, ease: EASE, delay: itemDelay }
        ).then(() => reset(item as HTMLElement));
      },
      { amount: 0.1 }
    );

    return () => {
      stop();
      items.forEach(reset);
    };
  }, [delay, step, reduce]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}

// Counts up to the numeric part of a stat ("20+", "50+", "1st", 12) once,
// the first time it scrolls into view. Values with no leading number render
// unchanged.
export function CountUp({ value, className = "" }: { value: string | number; className?: string }) {
  const text = String(value);
  const match = text.match(/^(\d+)(.*)$/);
  const hasNumber = match !== null;
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  // Deps are primitives only: the animation runs once when the stat becomes
  // visible and is never restarted by its own re-renders.
  useEffect(() => {
    if (!hasNumber || !isInView || reduce) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => setDisplay(target),
    });
    return () => controls.stop();
  }, [hasNumber, isInView, target, reduce]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {hasNumber ? `${reduce ? target : display}${suffix}` : text}
    </span>
  );
}

// Horizontal progress bar that grows to `percent` once visible.
export function ProgressBar({ percent, className = "" }: { percent: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ width: 0 }}
      whileInView={{ width: `${percent}%` }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1.2, ease: EASE, delay: 0.15 }}
    />
  );
}

interface ParallaxImageProps {
  src: string;
  alt?: string;
  className?: string;
  strength?: number;
}

// Image that drifts slightly slower than the page while it's on screen.
// Fills its (relative, overflow-hidden) parent.
export function ParallaxImage({ src, alt = "", className = "", strength = 60 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        style={reduce ? undefined : { y }}
        className={`absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover ${className}`}
      />
    </div>
  );
}

// Thin reading-progress bar pinned to the very top of the viewport.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-primary-500"
    />
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={false}
      animate={visible ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: 16, pointerEvents: "none" }}
      transition={{ duration: 0.35, ease: EASE }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg shadow-primary-900/25 hover:bg-primary-600"
    >
      <FontAwesomeIcon icon={icons.arrowUp} />
    </motion.button>
  );
}
