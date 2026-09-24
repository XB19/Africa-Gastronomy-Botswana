import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { kitchenImages, foodImages, pick } from "../lib/images";
import { Reveal, Stagger } from "../components/motion";

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
          <Reveal className="overflow-hidden">
            <img
              src={pick(kitchenImages, 0)}
              alt="Africa Gastronomy Botswana team"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <SectionHeading title={t("about.intro.title")} subtitle={t("about.intro.text")} />
        </Container>
      </section>

      <section className="bg-surface-200/50 py-16 sm:py-20">
        <Container>
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2" step={0.15}>
            <div className="group flex flex-col gap-4 bg-white p-8 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
                <FontAwesomeIcon icon={icons.earthAfrica} className="text-xl" />
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink-800">{t("about.vision.title")}</h3>
              <p className="leading-relaxed text-ink-500">{t("about.vision.text")}</p>
            </div>
            <div className="group flex flex-col gap-4 bg-white p-8 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
                <FontAwesomeIcon icon={icons.handshake} className="text-xl" />
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink-800">{t("about.mission.title")}</h3>
              <p className="leading-relaxed text-ink-500">{t("about.mission.text")}</p>
            </div>
          </Stagger>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading title={t("about.objectives.title")} />
          <Stagger as="ul" className="flex flex-col gap-4">
            {objectives.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-600">
                <FontAwesomeIcon icon={icons.check} className="mt-1 shrink-0 text-primary-500" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-surface-200/50 py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading title={t("about.leadership.title")} subtitle={t("about.leadership.text")} />
          <Stagger step={0.12} className="grid grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-3 bg-white p-5 text-center transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/8">
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
          </Stagger>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Stagger step={0.05} className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <img
                key={i}
                src={pick(foodImages, i + 25)}
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
