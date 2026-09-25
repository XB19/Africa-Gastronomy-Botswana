import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { eventPhotos } from "../lib/images";
import { chefProfiles } from "../data/chefs";
import { expectedOutcomes, pastEvents } from "../data/impact";
import { Reveal, Stagger } from "../components/motion";

export default function AboutUs() {
  const { t } = useTranslation();
  const objectives = t("about.objectives.items", { returnObjects: true }) as string[];
  const networkItems = t("about.network.items", { returnObjects: true }) as string[];
  const background = t("about.background.paragraphs", { returnObjects: true }) as string[];
  const leaders = chefProfiles.filter((c) => c.id === "monana-motswaledi" || c.id === "joseph-lancma");

  return (
    <>
      <PageHero kicker={t("about.hero.kicker")} title={t("about.hero.title")} image={eventPhotos.team} />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="overflow-hidden">
            <img
              src={eventPhotos.meeting}
              alt="Africa Gastronomique delegates in a meeting"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <SectionHeading title={t("about.intro.title")} subtitle={t("about.intro.text")} />
        </Container>
      </section>

      <section className="bg-surface-200/50 py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading title={t("about.network.title")} subtitle={t("about.network.text")} />
          <Stagger as="ul" className="flex flex-col gap-4">
            {networkItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-600">
                <FontAwesomeIcon icon={icons.check} className="mt-1 shrink-0 text-primary-500" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2" step={0.15}>
            <div className="group flex flex-col gap-4 bg-white p-8 shadow-sm shadow-ink-900/5 transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
                <FontAwesomeIcon icon={icons.earthAfrica} className="text-xl" />
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink-800">{t("about.vision.title")}</h3>
              <p className="leading-relaxed text-ink-500">{t("about.vision.text")}</p>
            </div>
            <div className="group flex flex-col gap-4 bg-white p-8 shadow-sm shadow-ink-900/5 transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
                <FontAwesomeIcon icon={icons.handshake} className="text-xl" />
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink-800">{t("about.mission.title")}</h3>
              <p className="leading-relaxed text-ink-500">{t("about.mission.text")}</p>
            </div>
          </Stagger>
        </Container>
      </section>

      <section className="bg-surface-200/50 py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <SectionHeading title={t("about.background.title")} />
            <div className="flex flex-col gap-5 leading-relaxed text-ink-500">
              {background.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-display text-xl font-semibold text-ink-800">{t("about.background.trackRecordTitle")}</h3>
            <Stagger step={0.05} className="grid grid-cols-2 gap-px bg-ink-800/8 sm:grid-cols-4">
              {pastEvents.map((e) => (
                <div key={e.name} className="flex flex-col gap-1 bg-white px-5 py-5">
                  <span className="text-sm font-bold text-ink-800">{e.name}</span>
                  <span className="text-xs font-medium uppercase tracking-wide text-primary-600">{e.detail}</span>
                </div>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-4">
            <SectionHeading title={t("about.objectives.title")} subtitle={t("about.objectives.intro")} />
          </div>
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
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading title={t("about.outcomes.title")} />
          <Stagger as="ul" className="flex flex-col gap-4">
            {expectedOutcomes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-600">
                <FontAwesomeIcon icon={icons.check} className="mt-1 shrink-0 text-primary-500" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading title={t("about.leadership.title")} subtitle={t("about.leadership.text")} />
          <Stagger step={0.12} className="grid grid-cols-2 gap-4">
            {leaders.map((chef) => (
              <div
                key={chef.id}
                className="flex flex-col items-center gap-3 bg-white p-5 text-center shadow-sm shadow-ink-900/5 transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/8"
              >
                <img src={chef.image} alt={chef.name} className="h-24 w-24 rounded-full object-cover object-top" />
                <div>
                  <p className="text-sm font-bold text-ink-800">{chef.name}</p>
                  <p className="text-xs text-ink-400">{chef.title}</p>
                </div>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-ink-800 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading title={t("about.conclusion.title")} subtitle={t("about.conclusion.text")} light />
        </Container>
      </section>
    </>
  );
}
