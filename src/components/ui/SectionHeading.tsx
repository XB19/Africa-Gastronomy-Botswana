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
    <div className={`flex flex-col gap-2.5 ${alignClass} ${className}`}>
      {kicker && (
        <span
          className={`text-xs font-bold uppercase tracking-[0.15em] ${
            light ? "text-primary-300" : "text-primary-600"
          }`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl font-bold leading-[1.12] text-balance ${
          light ? "text-surface-50" : "text-ink-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base leading-relaxed ${
            light ? "text-surface-100/80" : "text-ink-500"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
