import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { LinkButton } from "../components/ui/Button";
import { paths } from "../router/paths";
import { partnerTiers } from "../data/partners";
import { kitchenImages, pick } from "../lib/images";
import { Reveal, Stagger } from "../components/motion";

export default function Partners() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        kicker={t("partnersPage.hero.kicker")}
        title={t("partnersPage.hero.title")}
        subtitle={t("partnersPage.intro")}
        image={pick(kitchenImages, 5)}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-14">
          {partnerTiers.map((tier) => (
            <div key={tier.tier} className="flex flex-col gap-6">
              <h3 className="font-display text-xl font-semibold text-ink-800">{tier.tier} Partners</h3>
              <Stagger step={0.05} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {Array.from({ length: tier.slots }).map((_, i) => (
                  <div
                    key={i}
                    className="group flex aspect-[3/2] items-center justify-center border border-dashed border-ink-800/15 bg-surface-200/50 text-ink-300 transition-colors duration-300 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-500"
                  >
                    <FontAwesomeIcon icon={icons.building} className="text-2xl transition-transform duration-300 group-hover:scale-125" />
                  </div>
                ))}
              </Stagger>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-ink-800 py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            kicker="Sponsorship"
            title={t("partnersPage.tiers.title")}
            subtitle={t("partnersPage.tiers.text")}
            light
          />
          <Reveal delay={0.2} className="flex flex-col gap-4 border border-surface-50/10 bg-white/5 p-8">
            <div className="flex items-center gap-3 text-surface-50">
              <FontAwesomeIcon icon={icons.lock} className="text-primary-300" />
              <span className="font-semibold">{t("partnersPage.portalCta")}</span>
            </div>
            <p className="text-sm text-surface-100/70">
              Sponsors will be able to manage assets, hospitality and activations directly through the Sponsor
              Portal ahead of FIGA Botswana 2026.
            </p>
            <LinkButton to={paths.contact} icon={icons.arrowRight} className="mt-2 w-fit">
              {t("partnersPage.becomePartner")}
            </LinkButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
