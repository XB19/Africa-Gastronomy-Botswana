import { useTranslation } from "react-i18next";
import { icons } from "../../lib/icons";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { PhotoStrip } from "../../components/ui/PhotoStrip";
import { LinkButton } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { chefProfiles } from "../../data/chefs";

export function ChefsPreview() {
  const { t } = useTranslation();
  const items = chefProfiles.slice(0, 4).map((chef) => ({
    image: chef.image,
    eyebrow: chef.country,
    title: chef.name.replace("Chef ", ""),
  }));

  return (
    <section className="bg-surface-200/50 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker={t("home.chefs.kicker")}
            title={t("home.chefs.title")}
            subtitle={t("home.chefs.subtitle")}
          />
          <LinkButton to={paths.chefs} variant="outline" icon={icons.arrowRight} className="shrink-0">
            {t("home.chefs.cta")}
          </LinkButton>
        </div>
      </Container>

      <PhotoStrip items={items} columns={4} className="mt-10" />
    </section>
  );
}
