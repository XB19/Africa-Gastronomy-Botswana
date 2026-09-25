import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { LinkButton } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { participationTargets } from "../../data/impact";
import { CountUp, ProgressBar, Stagger } from "../../components/motion";

const stats = [
  { icon: icons.users, label: "Direct Participants (approx.)", value: "1000" },
  { icon: icons.earthAfrica, label: "African Countries Targeted", value: "20" },
  { icon: icons.handshake, label: "B2B Meetings Facilitated", value: "50+" },
];

const top = participationTargets.slice(0, 5);
const max = Math.max(...top.map((p) => p.target));

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

        <Stagger className="grid grid-cols-1 gap-px bg-ink-800/8 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="group relative bg-white p-7 transition-shadow duration-300 hover:z-10 hover:shadow-2xl hover:shadow-ink-900/10">
              <div className="flex items-center justify-between">
                <FontAwesomeIcon icon={stat.icon} className="text-lg text-primary-500" />
                <CountUp value={stat.value} className="font-display text-3xl font-bold text-ink-800" />
              </div>
              <p className="mt-4 text-sm font-semibold text-ink-500">{stat.label}</p>
            </div>
          ))}

          <div className="bg-white p-7 lg:col-span-3">
            <p className="text-sm font-semibold text-ink-500">Participation targets</p>
            <div className="mt-5 flex flex-col gap-4">
              {top.map((p) => (
                <div key={p.category} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-600">{p.category}</span>
                    <span className="font-bold text-ink-800">{p.target}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden bg-ink-800/8">
                    <ProgressBar className="h-full bg-primary-500" percent={(p.target / max) * 100} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
