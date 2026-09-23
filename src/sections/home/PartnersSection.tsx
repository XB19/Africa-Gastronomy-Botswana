import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { LinkButton } from "../../components/ui/Button";
import { paths } from "../../router/paths";

export function PartnersSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          kicker={t("home.partners.kicker")}
          title={t("home.partners.title")}
          subtitle={t("home.partners.subtitle")}
          align="center"
          className="mx-auto"
        />

        <div className="grid grid-cols-2 gap-px bg-ink-800/8 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-[3/2] items-center justify-center bg-white text-ink-300"
            >
              <FontAwesomeIcon icon={icons.building} className="text-2xl" />
            </div>
          ))}
        </div>

        <LinkButton to={paths.partners} variant="outline" icon={icons.arrowRight} className="mx-auto">
          {t("home.partners.cta")}
        </LinkButton>
      </Container>
    </section>
  );
}
