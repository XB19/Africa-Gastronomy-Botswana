import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { kitchenImages, foodImages, pick } from "../lib/images";

export default function AboutUs() {
  const { t } = useTranslation();
  const objectives = t("about.objectives.items", { returnObjects: true }) as string[];

  return (
    <>
      <PageHero
        kicker={t("about.hero.kicker")}
        title={t("about.hero.title")}
        image={pick(kitchenImages, 2)}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src={pick(kitchenImages, 0)}
            alt="Africa Gastronomy Botswana team"
            className="aspect-[4/3] w-full object-cover"
          />
          <SectionHeading title={t("about.intro.title")} subtitle={t("about.intro.text")} />
        </Container>
      </section>

      <section className="bg-cream-200/50 py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-4 bg-white p-8 sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center bg-terracotta-50 text-terracotta-600">
              <FontAwesomeIcon icon={icons.earthAfrica} className="text-xl" />
            </span>
            <h3 className="font-display text-2xl font-semibold text-ink-800">{t("about.vision.title")}</h3>
            <p className="leading-relaxed text-ink-500">{t("about.vision.text")}</p>
          </div>
          <div className="flex flex-col gap-4 bg-white p-8 sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center bg-terracotta-50 text-terracotta-600">
              <FontAwesomeIcon icon={icons.handshake} className="text-xl" />
            </span>
            <h3 className="font-display text-2xl font-semibold text-ink-800">{t("about.mission.title")}</h3>
            <p className="leading-relaxed text-ink-500">{t("about.mission.text")}</p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading title={t("about.objectives.title")} />
          <ul className="flex flex-col gap-4">
            {objectives.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-600">
                <FontAwesomeIcon icon={icons.check} className="mt-1 shrink-0 text-terracotta-500" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-cream-200/50 py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading title={t("about.leadership.title")} subtitle={t("about.leadership.text")} />
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-3 bg-white p-5 text-center">
                <img
                  src={pick(kitchenImages, i + 3)}
                  alt="Leadership placeholder"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-ink-800">Leadership Profile</p>
                  <p className="text-xs text-ink-400">To be announced</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <img
                key={i}
                src={pick(foodImages, i + 25)}
                alt=""
                className="aspect-square w-full object-cover"
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
