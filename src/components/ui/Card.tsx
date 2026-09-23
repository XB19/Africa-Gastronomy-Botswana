import type { PropsWithChildren } from "react";

export function Card({
  children,
  className = "",
  hover = true,
}: PropsWithChildren<{ className?: string; hover?: boolean }>) {
  return (
    <div
      className={`border border-ink-800/8 bg-white ${
        hover ? "transition-colors duration-200 hover:border-terracotta-300" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 bg-terracotta-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-terracotta-700 ${className}`}
    >
      {children}
    </span>
  );
}
