import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons, dataIconMap } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card, Badge } from "../components/ui/Card";
import { LinkButton } from "../components/ui/Button";
import { paths } from "../router/paths";
import { programmes, type ProgrammeType } from "../data/programmes";
import { registrationCategories, categoryIconMap } from "../data/categories";
import { kitchenImages, pick } from "../lib/images";

const tabs: { key: ProgrammeType; labelKey: string }[] = [
  { key: "masterclass", labelKey: "programmesPage.tabs.masterclasses" },
  { key: "competition", labelKey: "programmesPage.tabs.competitions" },
  { key: "exhibition", labelKey: "programmesPage.tabs.exhibitions" },
];

export default function Programmes() {
  const { t } = useTranslation();
  const [active, setActive] = useState<ProgrammeType>("masterclass");

  return (
    <>
      <PageHero
        kicker={t("programmesPage.hero.kicker")}
        title={t("programmesPage.hero.title")}
        subtitle={t("programmesPage.intro")}
        image={pick(kitchenImages, 1)}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === tab.key
                    ? "bg-terracotta-500 text-white"
                    : "bg-white text-ink-600 border border-ink-800/10 hover:border-terracotta-300"
                }`}
              >
                {t(tab.labelKey)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programmes
              .filter((p) => p.type === active)
              .map((programme) => (
                <Card key={programme.id} className="flex flex-col gap-4 p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center bg-terracotta-50 text-terracotta-600">
                      <FontAwesomeIcon icon={dataIconMap[programme.icon]} />
                    </span>
                    <Badge>{programme.day}</Badge>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-terracotta-700">{programme.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-500">{programme.description}</p>
                  <LinkButton to={paths.register} variant="ghost" size="sm" icon={icons.arrowRight} className="mt-auto !px-0">
                    {t("common.registerNow")}
                  </LinkButton>
                </Card>
              ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-200/50 py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading title={t("programmesPage.categoriesTitle")} align="center" className="mx-auto" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {registrationCategories.map((cat) => (
              <div
                key={cat.id}
                className={`flex flex-col gap-4 border p-7 ${
                  cat.featured
                    ? "border-terracotta-400 bg-ink-800 text-cream-50"
                    : "border-ink-800/8 bg-white"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center ${
                    cat.featured ? "bg-terracotta-500/20 text-terracotta-300" : "bg-terracotta-50 text-terracotta-600"
                  }`}
                >
                  <FontAwesomeIcon icon={categoryIconMap[cat.icon]} />
                </span>
                <h3 className={`font-display text-xl font-semibold ${cat.featured ? "text-cream-50" : "text-ink-800"}`}>
                  {cat.name}
                </h3>
                <p className={`text-sm font-bold ${cat.featured ? "text-terracotta-300" : "text-terracotta-600"}`}>
                  {cat.price}
                </p>
                <p className={`text-sm leading-relaxed ${cat.featured ? "text-cream-100/75" : "text-ink-500"}`}>
                  {cat.description}
                </p>
                <ul className="flex flex-col gap-2 text-sm">
                  {cat.perks.map((perk) => (
                    <li key={perk} className={`flex items-center gap-2 ${cat.featured ? "text-cream-100/85" : "text-ink-600"}`}>
                      <FontAwesomeIcon icon={icons.check} className="text-terracotta-400" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <LinkButton
                  to={paths.register}
                  variant={cat.featured ? "primary" : "outline"}
                  className="mt-auto"
                >
                  {t("common.registerNow")}
                </LinkButton>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
