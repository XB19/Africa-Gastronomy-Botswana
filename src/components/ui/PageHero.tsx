import type { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
import { Container } from "./Container";

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

  return (
    <section className="relative flex h-[400px] flex-col overflow-hidden bg-ink-800 sm:h-[480px] lg:h-[560px]">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink-900/55" />
        </div>
      )}

      <Container className="relative pt-8 sm:pt-12">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-semibold text-cream-50/85 hover:text-cream-50"
        >
          <FontAwesomeIcon icon={icons.chevronLeft} className="text-xs" />
          Back
        </button>
      </Container>

      <div className="flex-1" />

      <Container className="relative flex flex-col gap-3 pb-10 sm:pb-14 lg:pb-16">
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] text-cream-50 text-balance sm:text-5xl lg:text-7xl">
          {title}
        </h1>
        <span className="text-sm font-semibold text-cream-100/80">{kicker}</span>
        {subtitle && <p className="max-w-xl pt-1 text-sm leading-relaxed text-cream-100/70">{subtitle}</p>}
        {children}
      </Container>
    </section>
  );
}
