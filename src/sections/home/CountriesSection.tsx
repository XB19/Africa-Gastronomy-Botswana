import { useTranslation } from "react-i18next";
import { icons } from "../../lib/icons";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { LinkButton } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { countries } from "../../data/countries";

export function CountriesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker={t("home.countries.kicker")}
            title={t("home.countries.title")}
            subtitle={t("home.countries.subtitle")}
          />
          <LinkButton to={paths.countries} variant="outline" icon={icons.arrowRight} className="shrink-0">
            {t("home.countries.cta")}
          </LinkButton>
        </div>

        <div className="grid grid-cols-2 gap-px bg-ink-800/8 sm:grid-cols-4 lg:grid-cols-5">
          {countries.slice(0, 15).map((country) => (
            <div
              key={country.name}
              className="flex items-center gap-3 bg-white px-4 py-3.5"
            >
              <span className="text-2xl leading-none">{country.flag}</span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-ink-800">{country.name}</span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wide ${
                    country.status === "confirmed" ? "text-forest-500" : "text-ink-400"
                  }`}
                >
                  {country.status === "confirmed" ? "Confirmed" : "Invited"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
