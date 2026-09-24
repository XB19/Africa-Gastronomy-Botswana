import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { foodImages, kitchenImages, pick } from "../lib/images";
import { AnimatePresence, motion } from "framer-motion";
import { Stagger } from "../components/motion";
import { EASE } from "../components/motion/ease";

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
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  filter === f.key
                    ? "bg-primary-500 text-white"
                    : "bg-white text-ink-600 border border-ink-800/10 hover:border-primary-300"
                }`}
              >
                {t(f.labelKey)}
              </button>
            ))}
          </div>

          <Stagger key={filter} step={0.03} className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
            {items.map((item, i) => (
              <button
                key={item.src + i}
                onClick={() => setLightbox(item.src)}
                className="group relative block w-full overflow-hidden"
              >
                <img
                  src={item.src}
                  alt=""
                  className="w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-primary-900/0 text-white opacity-0 transition-all duration-500 group-hover:bg-primary-900/35 group-hover:opacity-100">
                  <FontAwesomeIcon icon={icons.expand} className="text-xl" />
                </span>
              </button>
            ))}
          </Stagger>
        </Container>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/90 p-6 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-surface-50 hover:bg-white/20"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={icons.close} className="text-xl" />
            </button>
            <motion.img
              key={lightbox}
              src={lightbox}
              alt=""
              className="max-h-[85vh] max-w-full object-contain shadow-2xl"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, ease: EASE }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
