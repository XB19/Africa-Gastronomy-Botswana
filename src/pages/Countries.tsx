import { useTranslation } from "react-i18next";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { countries } from "../data/countries";
import { foodImages, pick } from "../lib/images";
import { Stagger } from "../components/motion";

export default function Countries() {
  const { t } = useTranslation();
  const confirmed = countries.filter((c) => c.status === "confirmed");
  const invited = countries.filter((c) => c.status === "invited");

  return (
    <>
      <PageHero
        kicker={t("countriesPage.hero.kicker")}
        title={t("countriesPage.hero.title")}
        subtitle={t("countriesPage.intro")}
        image={pick(foodImages, 15)}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-14">
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-xl font-semibold text-ink-800">Confirmed Delegations</h3>
            <Stagger step={0.04} className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {confirmed.map((c) => (
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
            <h3 className="font-display text-xl font-semibold text-ink-800">Invited Countries</h3>
            <Stagger step={0.04} className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {invited.map((c) => (
                <div
                  key={c.name}
                  className="group flex items-center gap-3 border border-ink-800/8 bg-white px-4 py-3.5 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/8 hover:border-primary-300"
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
