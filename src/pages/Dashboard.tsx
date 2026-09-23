import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { CountdownTimer } from "../components/ui/CountdownTimer";
import { programmes } from "../data/programmes";
import { countries } from "../data/countries";
import { chefProfiles } from "../data/chefs";
import { registrationCategories } from "../data/categories";
import { kitchenImages, pick } from "../lib/images";

const breakdown = [
  { label: "Masterclasses", count: programmes.filter((p) => p.type === "masterclass").length, color: "bg-terracotta-500" },
  { label: "Competitions", count: programmes.filter((p) => p.type === "competition").length, color: "bg-gold-500" },
  { label: "Exhibitions", count: programmes.filter((p) => p.type === "exhibition").length, color: "bg-forest-500" },
];
const breakdownTotal = breakdown.reduce((sum, b) => sum + b.count, 0) || 1;

const topStats = [
  { icon: icons.users, label: "Chefs & Speakers", value: chefProfiles.length },
  { icon: icons.earthAfrica, label: "Confirmed Countries", value: countries.filter((c) => c.status === "confirmed").length },
  { icon: icons.globe, label: "Invited Countries", value: countries.filter((c) => c.status === "invited").length },
  { icon: icons.calendar, label: "Programme Items", value: programmes.length },
];

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        kicker={t("dashboardPage.hero.kicker")}
        title={t("dashboardPage.hero.title")}
        subtitle={t("dashboardPage.intro")}
        image={pick(kitchenImages, 7)}
      >
        <CountdownTimer variant="light" />
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {topStats.map((stat) => (
              <div key={stat.label} className="border border-ink-800/8 bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center bg-terracotta-50 text-terracotta-600">
                  <FontAwesomeIcon icon={stat.icon} />
                </span>
                <span className="mt-4 block font-display text-3xl font-bold text-ink-800">{stat.value}</span>
                <span className="text-xs font-medium uppercase tracking-wide text-ink-400">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="border border-ink-800/8 bg-white p-7 lg:col-span-2">
              <p className="text-sm font-semibold text-ink-500">Programme Mix</p>
              <div className="mt-4 flex h-4 w-full overflow-hidden rounded-full bg-ink-800/8">
                {breakdown.map((b) => (
                  <div key={b.label} className={b.color} style={{ width: `${(b.count / breakdownTotal) * 100}%`}} />
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

            <div className="border border-ink-800/8 bg-white p-7">
              <p className="text-sm font-semibold text-ink-500">Registration Categories</p>
              <div className="mt-4 flex flex-col gap-3">
                {registrationCategories.map((cat) => (
                  <div key={cat.id} className="flex items-center justify-between text-sm">
                    <span className="text-ink-700">{cat.name}</span>
                    <span className="font-semibold text-terracotta-600">{cat.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-dashed border-ink-800/15 bg-cream-200/50 p-8 text-center text-sm text-ink-400">
            Live registration counts, ticket sales and real-time delegate numbers will populate this dashboard
            once connected to the CMS and registration system.
          </div>
        </Container>
      </section>
    </>
  );
}
