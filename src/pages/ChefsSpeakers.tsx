import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { Badge } from "../components/ui/Card";
import { LinkButton } from "../components/ui/Button";
import { paths } from "../router/paths";
import { chefProfiles } from "../data/chefs";
import { kitchenImages, pick } from "../lib/images";

export default function ChefsSpeakers() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        kicker={t("chefsPage.hero.kicker")}
        title={t("chefsPage.hero.title")}
        subtitle={t("chefsPage.intro")}
        image={pick(kitchenImages, 4)}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <div className="border border-terracotta-200 bg-terracotta-50 px-6 py-4 text-sm text-terracotta-700">
            <FontAwesomeIcon icon={icons.filter} className="mr-2" />
            {t("common.placeholderNote")}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {chefProfiles.map((chef) => (
              <div
                key={chef.id}
                className="group overflow-hidden border border-ink-800/8 bg-white transition-colors hover:border-terracotta-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={chef.image}
                    alt={chef.role}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute left-4 top-4 bg-white/90">{chef.category}</Badge>
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <h3 className="font-display text-lg font-semibold text-ink-800">{chef.role}</h3>
                  <p className="text-sm text-ink-400">
                    Biography, areas of expertise and achievements to be published.
                  </p>
                  <div className="mt-2 flex gap-3 text-ink-300">
                    <FontAwesomeIcon icon={icons.instagram} />
                    <FontAwesomeIcon icon={icons.linkedin} />
                    <FontAwesomeIcon icon={icons.x} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-4 flex flex-col items-center gap-4 text-center">
            <p className="text-ink-500">Are you a chef, speaker or industry judge?</p>
            <LinkButton to={paths.contact} icon={icons.arrowRight}>
              {t("chefsPage.cta")}
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
