import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { LinkButton } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { programmes } from "../../data/programmes";
import { countries } from "../../data/countries";
import { chefProfiles } from "../../data/chefs";

const stats = [
  { icon: icons.users, label: "Chefs & Speakers Confirmed", value: chefProfiles.length, target: 50 },
  { icon: icons.earthAfrica, label: "Countries Represented", value: countries.filter((c) => c.status === "confirmed").length, target: countries.length },
  { icon: icons.calendar, label: "Programme Items Announced", value: programmes.length, target: 30 },
];

const breakdown = [
  { label: "Masterclasses", count: programmes.filter((p) => p.type === "masterclass").length, color: "bg-primary-500" },
  { label: "Competitions", count: programmes.filter((p) => p.type === "competition").length, color: "bg-gold-500" },
  { label: "Exhibitions", count: programmes.filter((p) => p.type === "exhibition").length, color: "bg-forest-500" },
];
const breakdownTotal = breakdown.reduce((sum, b) => sum + b.count, 0) || 1;

export function DashboardSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker={t("home.dashboard.kicker")}
            title={t("home.dashboard.title")}
            subtitle={t("home.dashboard.subtitle")}
          />
          <LinkButton to={paths.dashboard} variant="outline" icon={icons.arrowRight} className="shrink-0">
            {t("home.dashboard.cta")}
          </LinkButton>
        </div>

        <div className="grid grid-cols-1 gap-px bg-ink-800/8 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-7">
              <div className="flex items-center justify-between">
                <FontAwesomeIcon icon={stat.icon} className="text-lg text-primary-500" />
                <span className="font-display text-3xl font-bold text-ink-800">{stat.value}</span>
              </div>
              <p className="mt-4 text-sm font-semibold text-ink-500">{stat.label}</p>
              <div className="mt-3 h-1 w-full overflow-hidden bg-ink-800/8">
                <div
                  className="h-full bg-primary-500"
                  style={{ width: `${Math.min(100, (stat.value / stat.target) * 100)}%`}}
                />
              </div>
            </div>
          ))}

          <div className="bg-white p-7 lg:col-span-3">
            <p className="text-sm font-semibold text-ink-500">Programme Mix</p>
            <div className="mt-4 flex h-3 w-full overflow-hidden bg-ink-800/8">
              {breakdown.map((b) => (
                <div
                  key={b.label}
                  className={b.color}
                  style={{ width: `${(b.count / breakdownTotal) * 100}%`}}
                />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {breakdown.map((b) => (
                <span key={b.label} className="flex items-center gap-2 text-sm text-ink-600">
                  <span className={`h-2.5 w-2.5 rounded-full ${b.color}`} />
                  {b.label} <span className="font-bold text-ink-800">{b.count}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
