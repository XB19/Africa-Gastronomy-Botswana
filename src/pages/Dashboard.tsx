import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { CountdownTimer } from "../components/ui/CountdownTimer";
import { SectionHeading } from "../components/ui/SectionHeading";
import { expectedOutcomes, impactIndicators, monitoring, participationTargets } from "../data/impact";
import { eventPhotos } from "../lib/images";
import { CountUp, ProgressBar, Stagger } from "../components/motion";

const topStats = [
  { icon: icons.users, label: "Direct Participants (approx.)", value: "1000" },
  { icon: icons.earthAfrica, label: "African Countries Targeted", value: "20" },
  { icon: icons.userTie, label: "International Chefs & Experts", value: "50" },
  { icon: icons.calendar, label: "Days of Programming", value: "4" },
];

const maxTarget = Math.max(...participationTargets.map((p) => p.target));

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        kicker={t("dashboardPage.hero.kicker")}
        title={t("dashboardPage.hero.title")}
        subtitle={t("dashboardPage.intro")}
        image={eventPhotos.classroom}
      >
        <CountdownTimer variant="light" />
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-14">
          <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {topStats.map((stat) => (
              <div key={stat.label} className="border border-ink-800/8 bg-white p-6 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/8">
                <span className="flex h-11 w-11 items-center justify-center bg-primary-50 text-primary-600">
                  <FontAwesomeIcon icon={stat.icon} />
                </span>
                <CountUp value={stat.value} className="mt-4 block font-display text-3xl font-bold text-ink-800" />
                <span className="text-xs font-medium uppercase tracking-wide text-ink-400">{stat.label}</span>
              </div>
            ))}
          </Stagger>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="border border-ink-800/8 bg-white p-7">
              <p className="text-sm font-semibold text-ink-500">Target participation by category</p>
              <div className="mt-5 flex flex-col gap-4">
                {participationTargets.map((p) => (
                  <div key={p.category} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-ink-600">{p.category}</span>
                      <span className="font-bold text-ink-800">{p.target}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden bg-ink-800/8">
                      <ProgressBar className="h-full bg-primary-500" percent={(p.target / maxTarget) * 100} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-ink-400">
                Total direct participants: approximately 1,000. Countries targeted: 20 African countries.
              </p>
            </div>

            <div className="border border-ink-800/8 bg-white p-7">
              <p className="text-sm font-semibold text-ink-500">Impact indicators</p>
              <div className="mt-5 flex flex-col divide-y divide-ink-800/8">
                {impactIndicators.map((i) => (
                  <div key={i.indicator} className="flex items-start justify-between gap-4 py-3 text-sm">
                    <div className="flex flex-col">
                      <span className="text-ink-700">{i.indicator}</span>
                      <span className="text-[11px] font-bold uppercase tracking-wide text-ink-400">{i.area}</span>
                    </div>
                    <span className="shrink-0 font-bold text-primary-600">{i.target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <SectionHeading title="Expected Outcomes" />
            <ul className="flex flex-col gap-4">
              {expectedOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-600">
                  <FontAwesomeIcon icon={icons.check} className="mt-1 shrink-0 text-primary-500" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-ink-800/8 bg-white p-7">
            <p className="text-sm font-semibold text-ink-500">Monitoring and evaluation</p>
            <div className="mt-4 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {monitoring.map((m) => (
                <div key={m.indicator} className="flex items-start justify-between gap-4 border-b border-ink-800/8 py-3 text-sm">
                  <span className="font-medium text-ink-700">{m.indicator}</span>
                  <span className="text-right text-ink-500">{m.measurement}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
