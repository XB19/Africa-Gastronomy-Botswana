import { useTranslation } from "react-i18next";
import { icons } from "../../lib/icons";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { PhotoStrip } from "../../components/ui/PhotoStrip";
import { LinkButton } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { ugandaChallenge, ugandaFood } from "../../lib/images";

export function UgandaSection() {
  const { t } = useTranslation();
  const items = [
    { image: ugandaChallenge[43], eyebrow: "Uganda · 8–11 Sept 2026", title: "Opening & Stage" },
    { image: ugandaChallenge[20], eyebrow: "Hospitality Skills Challenge", title: "Chefs at Work" },
    { image: ugandaFood[26], eyebrow: "Fusion of Culture", title: "Baking & Pastry" },
    { image: ugandaChallenge[45], eyebrow: "Awards", title: "Prize-Giving" },
  ];

  return (
    <section className="bg-surface-200/50 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker={t("uganda.kicker")}
            title={t("uganda.hero.title")}
            subtitle={t("uganda.intro")}
          />
          <LinkButton to={paths.uganda} variant="outline" icon={icons.arrowRight} className="shrink-0">
            {t("uganda.cta")}
          </LinkButton>
        </div>
      </Container>
      <PhotoStrip items={items} columns={4} className="mt-10" />
    </section>
  );
}
