import type { ReactNode } from "react";

interface FeatureBannerProps {
  image: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

// Single full-width editorial banner — image with a caption box anchored
// bottom-left, in the spirit of a magazine feature spread.
export function FeatureBanner({ image, eyebrow, title, children }: FeatureBannerProps) {
  return (
    <div className="relative aspect-[16/7] w-full overflow-hidden sm:aspect-[21/8]">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-4 p-6 sm:p-10">
        <div className="max-w-md bg-ink-900/85 px-5 py-4 backdrop-blur-sm sm:px-6 sm:py-5">
          <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-terracotta-300">
            {eyebrow}
          </span>
          <span className="mt-1 block font-display text-xl font-bold uppercase leading-tight text-cream-50 sm:text-2xl">
            {title}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
