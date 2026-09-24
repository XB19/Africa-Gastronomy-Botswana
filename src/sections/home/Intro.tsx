import { useTranslation } from "react-i18next";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { PhotoStrip } from "../../components/ui/PhotoStrip";
import { kitchenImages, pick } from "../../lib/images";
import { CountUp, Reveal, Stagger } from "../../components/motion";

export function Intro() {
  const { t } = useTranslation();

  const strip = [
    { image: pick(kitchenImages, 0), eyebrow: "Africa Gastronomy", title: "Culinary Heritage" },
    { image: pick(kitchenImages, 1), eyebrow: "FIGA Botswana", title: "Chefs in Action" },
    { image: pick(kitchenImages, 2), eyebrow: "Gaborone 2026", title: "The Gastronomy Stage" },
  ];

  const stats: [string, string][] = [
    [t("home.intro.stat1Value"), t("home.intro.stat1Label")],
    [t("home.intro.stat2Value"), t("home.intro.stat2Label")],
    [t("home.intro.stat3Value"), t("home.intro.stat3Label")],
    [t("home.intro.stat4Value"), t("home.intro.stat4Label")],
  ];

  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          kicker={t("home.intro.kicker")}
          title={t("home.intro.title")}
        />
        <Reveal delay={0.2}>
        <p className="mt-5 text-base leading-[1.8] text-ink-500 sm:text-[17px]">{t("home.intro.text")}</p>
        </Reveal>
      </Container>

      <PhotoStrip items={strip} className="mt-14" />

      <Container>
        <Stagger className="grid grid-cols-2 divide-x divide-y divide-ink-800/8 border-t border-ink-800/8 sm:grid-cols-4 sm:divide-y-0">
          {stats.map(([value, label]) => (
            <div key={label} className="flex flex-col gap-1 px-5 py-6 sm:px-8">
              <CountUp value={value} className="font-display text-3xl font-bold text-primary-600 sm:text-4xl" />
              <span className="text-xs font-medium uppercase tracking-wide text-ink-400">{label}</span>
            </div>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
