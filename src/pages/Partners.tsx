import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { LinkButton } from "../components/ui/Button";
import { paths } from "../router/paths";
import { sponsorPackages, strategicPartners } from "../data/partners";
import { eventPhotos } from "../lib/images";
import { Reveal, Stagger } from "../components/motion";

export default function Partners() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        kicker={t("partnersPage.hero.kicker")}
        title={t("partnersPage.hero.title")}
        subtitle={t("partnersPage.intro")}
        image={eventPhotos.fruitCarving}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionHeading kicker="Endorsement" title={t("partnersPage.endorsement.title")} />
          <Reveal className="border-l-4 border-primary-500 bg-surface-200/50 p-7">
            <p className="leading-relaxed text-ink-600">{t("partnersPage.endorsement.text")}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-200/50 py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            kicker="Sponsorship"
            title={t("partnersPage.tiers.title")}
            subtitle={t("partnersPage.tiers.text")}
            align="center"
            className="mx-auto"
          />
          <Stagger step={0.08} className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {sponsorPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`flex flex-col gap-5 border p-7 transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/8 ${
                  pkg.id === "diamond" ? "border-primary-400 bg-ink-800 text-surface-50 lg:col-span-2" : "border-ink-800/8 bg-white"
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3
                    className={`font-display text-xl font-semibold ${pkg.id === "diamond" ? "text-surface-50" : "text-ink-800"}`}
                  >
                    {pkg.name}
                  </h3>
                  <span className={`text-lg font-bold ${pkg.id === "diamond" ? "text-primary-300" : "text-primary-600"}`}>
                    {pkg.price}
                  </span>
                </div>
                <ul
                  className={`grid gap-x-8 gap-y-2 text-sm ${pkg.id === "diamond" ? "lg:grid-cols-2" : ""}`}
                >
                  {pkg.benefits.map((b) => (
                    <li key={b} className={`flex items-start gap-2 ${pkg.id === "diamond" ? "text-surface-100/85" : "text-ink-600"}`}>
                      <FontAwesomeIcon icon={icons.check} className="mt-1 shrink-0 text-primary-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading title={t("partnersPage.strategicTitle")} />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {strategicPartners.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <h3 className="font-display text-lg font-semibold text-primary-700">{group.title}</h3>
                <ul className="flex flex-col gap-2">
                  {group.partners.map((name) => (
                    <li key={name} className="flex items-start gap-2 text-ink-600">
                      <FontAwesomeIcon icon={icons.checkPlain} className="mt-1.5 text-[10px] text-primary-400" />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-800 py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            kicker="Get Involved"
            title={t("partnersPage.becomePartner")}
            subtitle="Contact Chef Monana Motswaledi, President of Africa Gastronomique Botswana, on +267 72 486 352 or +267 71 452 085."
            light
          />
          <Reveal delay={0.2} className="flex flex-wrap gap-4">
            <a
              href="/FIGA-Botswana-2026-Sponsoring-Dossier.pdf"
              download
              className="inline-flex items-center gap-2 bg-primary-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-400"
            >
              <FontAwesomeIcon icon={icons.download} />
              {t("partnersPage.dossierCta")}
            </a>
            <LinkButton to={paths.contact} variant="outline" icon={icons.arrowRight} className="!border-surface-50/30 !text-surface-50">
              {t("nav.contact")}
            </LinkButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
