import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { LinkButton } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { Stagger } from "../../components/motion";

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

        <Stagger className="grid grid-cols-2 gap-px bg-ink-800/8 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="group relative transition-shadow duration-300 hover:z-10 hover:shadow-2xl hover:shadow-ink-900/10 flex aspect-[3/2] items-center justify-center bg-white text-ink-300 hover:text-primary-500"
            >
              <FontAwesomeIcon icon={icons.building} className="text-2xl transition-transform duration-300 group-hover:scale-125" />
            </div>
          ))}
        </Stagger>

        <LinkButton to={paths.partners} variant="outline" icon={icons.arrowRight} className="mx-auto">
          {t("home.partners.cta")}
        </LinkButton>
      </Container>
    </section>
  );
}
