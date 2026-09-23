import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { foodImages, kitchenImages, pick } from "../lib/images";

type Filter = "all" | "food" | "kitchen";

export default function Gallery() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = useMemo(() => {
    const food = foodImages.map((src) => ({ src, category: "food" as const }));
    const kitchen = kitchenImages.map((src) => ({ src, category: "kitchen" as const }));
    const all = [...food, ...kitchen];
    if (filter === "all") return all;
    return all.filter((i) => i.category === filter);
  }, [filter]);

  const filters: { key: Filter; labelKey: string }[] = [
    { key: "all", labelKey: "galleryPage.filters.all" },
    { key: "food", labelKey: "galleryPage.filters.food" },
    { key: "kitchen", labelKey: "galleryPage.filters.kitchen" },
  ];

  return (
    <>
      <PageHero
        kicker={t("galleryPage.hero.kicker")}
        title={t("galleryPage.hero.title")}
        image={pick(foodImages, 30)}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-wrap items-center gap-2">
            <FontAwesomeIcon icon={icons.filter} className="mr-1 text-ink-400" />
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === f.key
                    ? "bg-terracotta-500 text-white"
                    : "bg-white text-ink-600 border border-ink-800/10 hover:border-terracotta-300"
                }`}
              >
                {t(f.labelKey)}
              </button>
            ))}
          </div>

          <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
            {items.map((item, i) => (
              <button
                key={item.src + i}
                onClick={() => setLightbox(item.src)}
                className="group block w-full overflow-hidden"
              >
                <img
                  src={item.src}
                  alt=""
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </Container>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream-50 hover:bg-white/20"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={icons.close} className="text-xl" />
          </button>
          <img src={lightbox} alt="" className="max-h-[85vh] max-w-full object-contain" />
        </div>
      )}
    </>
  );
}
