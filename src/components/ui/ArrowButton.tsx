import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";

interface ArrowButtonProps {
  className?: string;
  variant?: "solid" | "outline";
}

export function ArrowButton({ className = "", variant = "solid" }: ArrowButtonProps) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
        variant === "solid"
          ? "bg-primary-500 text-white group-hover:bg-primary-600"
          : "border border-ink-800/20 text-ink-800 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-white"
      } ${className}`}
    >
      <FontAwesomeIcon icon={icons.arrowRight} className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
    </span>
  );
}
