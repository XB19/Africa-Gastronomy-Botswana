import { useTranslation } from "react-i18next";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { Badge } from "../components/ui/Card";
import { LinkButton } from "../components/ui/Button";
import { paths } from "../router/paths";
import { chefGroups, chefsByGroup } from "../data/chefs";
import { eventPhotos } from "../lib/images";
import { Stagger } from "../components/motion";

export default function ChefsSpeakers() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        kicker={t("chefsPage.hero.kicker")}
        title={t("chefsPage.hero.title")}
        subtitle={t("chefsPage.intro")}
        image={eventPhotos.chefsGroup}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-16">
          {chefGroups.map((group) => (
            <div key={group.key} className="flex flex-col gap-8">
              <h2 className="font-display text-2xl font-semibold text-ink-800">{group.title}</h2>
              <Stagger step={0.1} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {chefsByGroup(group.key).map((chef) => (
                  <div
                    key={chef.id}
                    className="group flex flex-col overflow-hidden border border-ink-800/8 bg-white transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1.5 hover:border-primary-300 hover:shadow-2xl hover:shadow-ink-900/10"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={chef.image}
                        alt={chef.name}
                        className="aspect-[4/3] w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                      />
                      <Badge className="absolute left-4 top-4 bg-white/90">
                        {chef.flags} {chef.country}
                      </Badge>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h3 className="font-display text-lg font-semibold text-ink-800">{chef.name}</h3>
                      <p className="text-xs font-bold uppercase tracking-wide text-primary-600">{chef.title}</p>
                      {chef.bio.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-relaxed text-ink-500">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </Stagger>
            </div>
          ))}

          <div className="mx-auto flex flex-col items-center gap-4 text-center">
            <p className="text-ink-500">Want to join the Africa Gastronomique network in Botswana?</p>
            <LinkButton to={paths.contact} icon={icons.arrowRight}>
              {t("chefsPage.cta")}
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
