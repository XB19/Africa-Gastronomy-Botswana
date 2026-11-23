import { useTranslation } from "react-i18next";
import { icons } from "../../lib/icons";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { PhotoStrip } from "../../components/ui/PhotoStrip";
import { LinkButton } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { botswanaHighlights } from "../../lib/images";

export function BotswanaSection() {
  const { t } = useTranslation();
  const items = [
    { image: botswanaHighlights.flags, eyebrow: t("botswana.dayLabel", { day: 1 }), title: t("botswana.strip.flags") },
    { image: botswanaHighlights.plate, eyebrow: t("botswana.dayLabel", { day: 2 }), title: t("botswana.strip.plate") },
    { image: botswanaHighlights.panel, eyebrow: t("botswana.dayLabel", { day: 3 }), title: t("botswana.strip.panel") },
    { image: botswanaHighlights.gala, eyebrow: t("botswana.dayLabel", { day: 4 }), title: t("botswana.strip.gala") },
  ];

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker={t("botswana.kicker")}
            title={t("botswana.hero.title")}
            subtitle={t("botswana.intro")}
          />
          <LinkButton to={paths.botswana} variant="outline" icon={icons.arrowRight} className="shrink-0">
            {t("botswana.cta")}
          </LinkButton>
        </div>
      </Container>
      <PhotoStrip items={items} columns={4} className="mt-10" />
    </section>
  );
}
