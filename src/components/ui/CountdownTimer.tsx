import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "../motion/ease";

export const EVENT_START_DATE = new Date("2026-11-11T09:00:00+02:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

interface CountdownTimerProps {
  target?: Date;
  variant?: "dark" | "light";
}

export function CountdownTimer({ target = EVENT_START_DATE, variant = "dark" }: CountdownTimerProps) {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units: Array<[number, string]> = [
    [timeLeft.days, t("common.days")],
    [timeLeft.hours, t("common.hours")],
    [timeLeft.minutes, t("common.minutes")],
    [timeLeft.seconds, t("common.seconds")],
  ];

  const isDark = variant === "dark";

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map(([value, label], i) => (
        <div
          key={label + i}
          className={`flex flex-col items-center justify-center gap-1 px-3.5 py-3 sm:px-5 sm:py-4 min-w-[68px] sm:min-w-[84px] ${
            isDark
              ? "bg-white/[0.06] border border-white/15 text-surface-50"
              : "bg-white border border-ink-800/10 text-ink-800"
          }`}
        >
          {/* Each tick slides the new value up while the old one leaves. */}
          <span className="relative block h-8 overflow-hidden sm:h-9">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={value}
                className="block font-display text-2xl font-bold leading-8 tabular-nums sm:text-3xl sm:leading-9"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                {String(value).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </span>
          <span
            className={`text-[10px] sm:text-xs uppercase tracking-widest font-semibold ${
              isDark ? "text-surface-100/70" : "text-ink-400"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
