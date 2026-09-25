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
import { Stagger } from "../components/motion";

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
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  active === tab.key
                    ? "bg-primary-500 text-white shadow-md shadow-primary-900/20"
                    : "bg-white text-ink-600 border border-ink-800/10 hover:border-primary-300"
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
                    <span className="flex h-11 w-11 items-center justify-center bg-primary-50 text-primary-600">
                      <FontAwesomeIcon icon={dataIconMap[programme.icon]} />
                    </span>
                    <Badge>{programme.day} · {programme.time}</Badge>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary-700">{programme.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-500">{programme.description}</p>
                  <LinkButton to={paths.register} variant="ghost" size="sm" icon={icons.arrowRight} className="mt-auto !px-0">
                    {t("common.registerNow")}
                  </LinkButton>
                </Card>
              ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-200/50 py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading title={t("programmesPage.categoriesTitle")} align="center" className="mx-auto" />
          <Stagger step={0.1} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {registrationCategories.map((cat) => (
              <div
                key={cat.id}
                className={`flex flex-col gap-4 border p-7 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/8 ${
                  cat.featured
                    ? "border-primary-400 bg-ink-800 text-surface-50"
                    : "border-ink-800/8 bg-white"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center ${
                    cat.featured ? "bg-primary-500/20 text-primary-300" : "bg-primary-50 text-primary-600"
                  }`}
                >
                  <FontAwesomeIcon icon={categoryIconMap[cat.icon]} />
                </span>
                <h3 className={`font-display text-xl font-semibold ${cat.featured ? "text-surface-50" : "text-ink-800"}`}>
                  {cat.name}
                </h3>
                <p className={`text-sm font-bold ${cat.featured ? "text-primary-300" : "text-primary-600"}`}>
                  {cat.price}
                </p>
                <p className={`text-sm leading-relaxed ${cat.featured ? "text-surface-100/75" : "text-ink-500"}`}>
                  {cat.description}
                </p>
                <ul className="flex flex-col gap-2 text-sm">
                  {cat.perks.map((perk) => (
                    <li key={perk} className={`flex items-center gap-2 ${cat.featured ? "text-surface-100/85" : "text-ink-600"}`}>
                      <FontAwesomeIcon icon={icons.check} className="text-primary-400" />
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
          </Stagger>
        </Container>
      </section>
    </>
  );
}
