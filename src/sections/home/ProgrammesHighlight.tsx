import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataIconMap } from "../../lib/icons";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { ArrowButton } from "../../components/ui/ArrowButton";
import { Badge } from "../../components/ui/Card";
import { LinkButton } from "../../components/ui/Button";
import { icons } from "../../lib/icons";
import { paths } from "../../router/paths";
import { programmes } from "../../data/programmes";

const typeLabel: Record<string, string> = {
  masterclass: "Masterclass",
  competition: "Competition",
  exhibition: "Exhibition",
};

export function ProgrammesHighlight() {
  const { t } = useTranslation();
  const featured = programmes.slice(0, 6);

  return (
    <section className="bg-cream-200/50 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker={t("home.programmes.kicker")}
            title={t("home.programmes.title")}
            subtitle={t("home.programmes.subtitle")}
          />
          <LinkButton to={paths.programmes} variant="outline" icon={icons.arrowRight} className="shrink-0">
            {t("home.programmes.cta")}
          </LinkButton>
        </div>

        <div className="grid grid-cols-1 gap-px bg-ink-800/8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((programme) => (
            <div key={programme.id} className="group flex flex-col gap-4 bg-white p-7">
              <div className="flex items-center justify-between">
                <Badge>{typeLabel[programme.type]}</Badge>
                <FontAwesomeIcon icon={dataIconMap[programme.icon]} className="text-lg text-terracotta-500" />
              </div>
              <h3 className="font-display text-lg font-semibold text-terracotta-700">{programme.title}</h3>
              <p className="text-sm leading-relaxed text-ink-500">{programme.description}</p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-ink-400">{programme.day}</span>
                <ArrowButton variant="outline" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
