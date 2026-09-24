import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons, dataIconMap } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { Badge } from "../components/ui/Card";
import { programmes } from "../data/programmes";
import { kitchenImages, pick } from "../lib/images";
import { Stagger } from "../components/motion";

const days = [
  { date: "11 Nov 2026", label: "Day 1 · Opening" },
  { date: "12 Nov 2026", label: "Day 2 · Competitions" },
  { date: "13 Nov 2026", label: "Day 3 · Masterclasses" },
  { date: "14 Nov 2026", label: "Day 4 · Gala & Closing" },
];

function itemsForDay(dayIndex: number) {
  return programmes.filter((p) => p.day.startsWith(`Day ${dayIndex}`) || p.day === "Day 1–4");
}

export default function CalendarPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        kicker={t("calendarPage.hero.kicker")}
        title={t("calendarPage.hero.title")}
        subtitle={t("calendarPage.intro")}
        image={pick(kitchenImages, 6)}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-14">
          {days.map((day, i) => {
            const dayItems = itemsForDay(i + 1);
            return (
              <div key={day.date} className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
                <div className="flex flex-col gap-1 lg:sticky lg:top-28 lg:self-start">
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-600">
                    <FontAwesomeIcon icon={icons.calendar} />
                    {day.date}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink-800">{day.label}</h3>
                </div>
                <Stagger step={0.08} className="flex flex-col gap-4 border-l border-ink-800/10 pl-6">
                  {dayItems.length === 0 && (
                    <p className="text-sm text-ink-400">Schedule to be announced.</p>
                  )}
                  {dayItems.map((item) => (
                    <div
                      key={item.id}
                      className="group flex items-start gap-4 border border-ink-800/8 bg-white p-5 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/8 hover:border-primary-300"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
                        <FontAwesomeIcon icon={dataIconMap[item.icon]} className="text-sm" />
                      </span>
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-semibold text-ink-800">{item.title}</h4>
                          <Badge>{item.type}</Badge>
                        </div>
                        <p className="text-sm text-ink-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </Stagger>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
