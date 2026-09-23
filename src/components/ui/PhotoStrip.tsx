interface PhotoStripItem {
  image: string;
  eyebrow?: string;
  title: string;
}

interface PhotoStripProps {
  items: PhotoStripItem[];
  className?: string;
  columns?: 3 | 4;
}

const columnClass = {
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

// Edge-to-edge caption strip — mirrors the "featured people" band pattern:
// full-bleed photos, no gutters, dark gradient + caption overlay.
export function PhotoStrip({ items, className = "", columns = 3 }: PhotoStripProps) {
  return (
    <div className={`grid grid-cols-1 ${columnClass[columns]} ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="group relative aspect-[4/3] overflow-hidden sm:aspect-[3/4]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            {item.eyebrow && (
              <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-terracotta-300">
                {item.eyebrow}
              </span>
            )}
            <span className="mt-1 block font-display text-lg font-bold uppercase leading-tight text-cream-50 sm:text-xl">
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
