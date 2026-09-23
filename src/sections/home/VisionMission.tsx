import { useTranslation } from "react-i18next";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";

export function VisionMission() {
  const { t } = useTranslation();

  return (
    <section className="bg-cream-200/50 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading kicker={t("home.visionMission.kicker")} title={t("home.visionMission.title")} />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16">
          <div className="flex flex-col gap-3 border-t-2 border-terracotta-500 pt-5">
            <h3 className="font-display text-xl font-semibold text-ink-800">
              {t("home.visionMission.visionTitle")}
            </h3>
            <p className="leading-[1.8] text-ink-500">{t("home.visionMission.visionText")}</p>
          </div>

          <div className="flex flex-col gap-3 border-t-2 border-terracotta-500 pt-5">
            <h3 className="font-display text-xl font-semibold text-ink-800">
              {t("home.visionMission.missionTitle")}
            </h3>
            <p className="leading-[1.8] text-ink-500">{t("home.visionMission.missionText")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
