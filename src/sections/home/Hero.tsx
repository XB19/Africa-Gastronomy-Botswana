import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
import { paths } from "../../router/paths";
import { Container } from "../../components/ui/Container";
import { LinkButton } from "../../components/ui/Button";
import { CountdownTimer } from "../../components/ui/CountdownTimer";
import { foodImages, pick } from "../../lib/images";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-ink-800">
      <div className="absolute inset-0">
        <img src={pick(foodImages, 4)} alt="" className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/55 to-ink-900/35" />
      </div>

      <Container className="relative flex min-h-[78vh] flex-col justify-end gap-6 pb-14 pt-28 sm:min-h-[82vh]">
        <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.03] text-surface-50 text-balance sm:text-6xl lg:text-7xl">
          {t("home.hero.title")}
          <span className="block text-primary-400">{t("home.hero.titleAccent")}</span>
        </h1>

        <span className="text-sm font-semibold uppercase tracking-[0.1em] text-surface-100/85">
          {t("home.hero.kicker")}
        </span>

        <p className="max-w-xl text-base leading-relaxed text-surface-100/75 sm:text-lg">
          {t("home.hero.subtitle")}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <LinkButton to={paths.register} size="lg" icon={icons.arrowRight}>
            {t("home.hero.ctaPrimary")}
          </LinkButton>
          <LinkButton
            to={paths.programmes}
            size="lg"
            variant="outline"
            className="!border-surface-50/30 !text-surface-50 hover:!border-primary-400 hover:!text-primary-300"
          >
            {t("home.hero.ctaSecondary")}
          </LinkButton>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-surface-100/55">
            {t("home.hero.countdownLabel")}
          </span>
          <CountdownTimer />
        </div>
      </Container>

      <div className="relative border-t border-surface-50/10 bg-ink-900">
        <Container className="flex flex-wrap items-center gap-x-10 gap-y-2 py-3.5 text-sm text-surface-100/75">
          <span className="flex items-center gap-2 font-semibold text-surface-50">
            <FontAwesomeIcon icon={icons.calendar} className="text-primary-400" />
            {t("meta.dates")}
          </span>
          <span className="flex items-center gap-2 font-semibold text-surface-50">
            <FontAwesomeIcon icon={icons.location} className="text-primary-400" />
            {t("meta.location")}
          </span>
        </Container>
      </div>
    </section>
  );
}
