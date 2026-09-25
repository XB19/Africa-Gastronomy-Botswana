import { useTranslation } from "react-i18next";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { countries } from "../data/countries";
import { eventPhotos } from "../lib/images";
import { Stagger } from "../components/motion";

export default function Countries() {
  const { t } = useTranslation();
  const delegations = countries.filter((c) => c.status === "delegation");
  const network = countries.filter((c) => c.status === "network");

  return (
    <>
      <PageHero
        kicker={t("countriesPage.hero.kicker")}
        title={t("countriesPage.hero.title")}
        subtitle={t("countriesPage.intro")}
        image={eventPhotos.togoGroup}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-14">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink-800">Countries of our featured chefs</h3>
              <p className="mt-1 text-sm text-ink-500">Chefs from these countries are presented in the FIGA Botswana 2026 dossier.</p>
            </div>
            <Stagger step={0.04} className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {delegations.map((c) => (
                <div
                  key={c.name}
                  className="group flex items-center gap-3 border border-forest-500/20 bg-forest-500/5 px-4 py-3.5 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/8"
                >
                  <span className="text-2xl leading-none transition-transform duration-300 group-hover:scale-125">{c.flag}</span>
                  <span className="text-sm font-semibold text-ink-800">{c.name}</span>
                </div>
              ))}
            </Stagger>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink-800">The Africa Gastronomique network</h3>
              <p className="mt-1 text-sm text-ink-500">Our Ancestral Cuisine — countries of the Africa Gastronomique family.</p>
            </div>
            <Stagger step={0.02} className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {network.map((c) => (
                <div
                  key={c.name}
                  className="group flex items-center gap-3 border border-ink-800/8 bg-white px-4 py-3.5 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-ink-900/8"
                >
                  <span className="text-2xl leading-none transition-transform duration-300 group-hover:scale-125">{c.flag}</span>
                  <span className="text-sm font-semibold text-ink-800">{c.name}</span>
                </div>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>
    </>
  );
}
