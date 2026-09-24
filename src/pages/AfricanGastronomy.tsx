import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { foodImages, pick } from "../lib/images";
import { Reveal, Stagger } from "../components/motion";

const sections = [
  { key: "heritage", icon: icons.earthAfrica },
  { key: "traditional", icon: icons.bowlFood },
  { key: "ingredients", icon: icons.seedling },
  { key: "initiatives", icon: icons.handshake },
] as const;

export default function AfricanGastronomy() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        kicker={t("gastronomy.hero.kicker")}
        title={t("gastronomy.hero.title")}
        image={pick(foodImages, 9)}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-16">
          {sections.map((section, i) => (
            <div
              key={section.key}
              className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal className="overflow-hidden">
                <img
                  src={pick(foodImages, i * 6 + 2)}
                  alt={t(`gastronomy.${section.key}.title`)}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
                />
              </Reveal>
              <Reveal delay={0.15} className="flex flex-col gap-4">
                <span className="flex h-12 w-12 items-center justify-center bg-primary-50 text-primary-600">
                  <FontAwesomeIcon icon={section.icon} className="text-xl" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink-800 sm:text-3xl">
                  {t(`gastronomy.${section.key}.title`)}
                </h2>
                <p className="leading-relaxed text-ink-500">{t(`gastronomy.${section.key}.text`)}</p>
              </Reveal>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-surface-200/50 py-16">
        <Container>
          <Stagger step={0.04} className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <img
                key={i}
                src={pick(foodImages, i)}
                alt=""
                className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
              />
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
