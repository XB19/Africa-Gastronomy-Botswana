import { useTranslation } from "react-i18next";
import { icons } from "../../lib/icons";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { LinkButton } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { strategicPartners } from "../../data/partners";
import { Stagger } from "../../components/motion";

const featured = strategicPartners.flatMap((g) => g.partners).slice(0, 12);

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

        <Stagger className="grid grid-cols-2 gap-px bg-ink-800/8 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((name) => (
            <div
              key={name}
              className="group relative flex min-h-[88px] items-center justify-center bg-white px-4 py-5 text-center text-sm font-semibold text-ink-600 transition-[box-shadow,color] duration-300 hover:z-10 hover:text-primary-600 hover:shadow-2xl hover:shadow-ink-900/10"
            >
              {name}
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
