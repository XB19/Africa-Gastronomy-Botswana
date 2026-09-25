import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { schedule } from "../data/schedule";
import { eventPhotos } from "../lib/images";
import { Stagger } from "../components/motion";

export default function CalendarPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        kicker={t("calendarPage.hero.kicker")}
        title={t("calendarPage.hero.title")}
        subtitle={t("calendarPage.intro")}
        image={eventPhotos.audience}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-14">
          {schedule.map((day) => (
            <div key={day.date} className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
              <div className="flex flex-col gap-1 lg:sticky lg:top-28 lg:self-start">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-600">
                  <FontAwesomeIcon icon={icons.calendar} />
                  Day {day.day} · {day.date}
                </span>
                <h3 className="font-display text-2xl font-semibold text-ink-800">{day.label}</h3>
              </div>
              <Stagger step={0.05} className="flex flex-col gap-3 border-l border-ink-800/10 pl-6">
                {day.items.map((item) => (
                  <div
                    key={`${item.time}-${item.title}`}
                    className="group flex flex-col gap-2 border border-ink-800/8 bg-white p-5 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-lg hover:shadow-ink-900/8 sm:flex-row sm:items-start sm:gap-6"
                  >
                    <span className="flex shrink-0 items-center gap-2 text-sm font-bold tabular-nums text-primary-600 sm:w-36">
                      <FontAwesomeIcon icon={icons.clock} className="text-xs" />
                      {item.time}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-semibold text-ink-800">{item.title}</h4>
                      {item.details && (
                        <ul className="flex flex-col gap-1 text-sm text-ink-500">
                          {item.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2">
                              <FontAwesomeIcon icon={icons.checkPlain} className="mt-1 text-[10px] text-primary-400" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </Stagger>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
