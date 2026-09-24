import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 shadow-sm shadow-primary-900/20",
  secondary:
    "bg-ink-800 text-surface-50 hover:bg-ink-700",
  outline:
    "border border-ink-800/20 text-ink-800 hover:border-primary-500 hover:text-primary-600",
  ghost: "text-ink-800 hover:text-primary-600",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: IconDefinition;
  iconPosition?: "left" | "right";
  className?: string;
  children?: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2.5 font-semibold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";

export const Button = forwardRef<
  HTMLButtonElement,
  BaseProps & ButtonHTMLAttributes<HTMLButtonElement>
>(function Button(
  { variant = "primary", size = "md", icon, iconPosition = "right", className = "", children, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {icon && iconPosition === "left" && <FontAwesomeIcon icon={icon} className="text-[0.9em]" />}
      {children}
      {icon && iconPosition === "right" && <FontAwesomeIcon icon={icon} className="text-[0.9em]" />}
    </button>
  );
});

export function LinkButton({
  to,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  children,
  external,
  ...rest
}: BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { to: string; external?: boolean }) {
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const content = (
    <>
      {icon && iconPosition === "left" && <FontAwesomeIcon icon={icon} className="text-[0.9em]" />}
      {children}
      {icon && iconPosition === "right" && <FontAwesomeIcon icon={icon} className="text-[0.9em]" />}
    </>
  );

  if (external) {
    return (
      <a href={to} className={classes} target="_blank" rel="noreferrer" {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} {...rest}>
      {content}
    </Link>
  );
}
