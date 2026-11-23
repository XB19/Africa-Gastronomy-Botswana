import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal, Stagger } from "../components/motion";
import { EASE } from "../components/motion/ease";
import { botswanaDays, botswanaHighlights } from "../lib/images";
import { schedule } from "../data/schedule";

interface DayCopy {
  title: string;
  text: string;
}

export default function BotswanaHighlights() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<string | null>(null);
  const dayCopy = t("botswana.days", { returnObjects: true }) as DayCopy[];

  return (
    <>
      <PageHero
        kicker={t("botswana.hero.kicker")}
        title={t("botswana.hero.title")}
        subtitle={t("botswana.intro")}
        image={botswanaHighlights.flags}
      />

      {botswanaDays.map((photos, i) => (
        <section key={i} className={`py-16 sm:py-20 ${i % 2 === 1 ? "bg-surface-200/50" : ""}`}>
          <Container className="flex flex-col gap-10">
            <Reveal>
              <SectionHeading
                kicker={`${t("botswana.dayLabel", { day: i + 1 })} · ${schedule[i]?.date ?? ""} · ${t("botswana.photoCount", { count: photos.length })}`}
                title={dayCopy[i]?.title ?? ""}
                subtitle={dayCopy[i]?.text}
              />
            </Reveal>
            <Stagger step={0.03} className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
              {photos.map((src, n) => (
                <button
                  key={src}
                  onClick={() => setLightbox(src)}
                  className="group relative block w-full overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`FIGA Botswana 2026, day ${i + 1}, photo ${n + 1}`}
                    loading="lazy"
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
      ))}

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
