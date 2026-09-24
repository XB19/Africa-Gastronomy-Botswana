import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
import { paths } from "../../router/paths";
import { Container } from "../../components/ui/Container";
import { LinkButton } from "../../components/ui/Button";
import { CountdownTimer } from "../../components/ui/CountdownTimer";
import { foodImages, pick } from "../../lib/images";
import { EASE } from "../../components/motion/ease";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: EASE, delay },
});

export function Hero() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, 220]);
  const copyY = useTransform(scrollY, [0, 800], [0, -60]);
  const copyOpacity = useTransform(scrollY, [0, 550], [1, 0]);

  return (
    <section className="relative overflow-hidden bg-ink-800">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        {/* Slow "Ken Burns" push-in on load. */}
        <motion.img
          src={pick(foodImages, 4)}
          alt=""
          className="h-full w-full object-cover opacity-50"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 9, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/55 to-ink-900/35" />
      </motion.div>

      <Container className="relative flex min-h-[78vh] flex-col justify-end pb-14 pt-28 sm:min-h-[82vh]">
        <motion.div className="flex flex-col gap-6" style={{ y: copyY, opacity: copyOpacity }}>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.03] text-surface-50 text-balance sm:text-6xl lg:text-7xl">
            {/* Each line is revealed from behind a mask. */}
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              >
                {t("home.hero.title")}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block text-primary-400"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.35 }}
              >
                {t("home.hero.titleAccent")}
              </motion.span>
            </span>
          </h1>

          <motion.span
            {...rise(0.6)}
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.1em] text-surface-100/85"
          >
            <motion.span
              aria-hidden
              className="h-0.5 w-10 origin-left bg-primary-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
            />
            {t("home.hero.kicker")}
          </motion.span>

          <motion.p {...rise(0.75)} className="max-w-xl text-base leading-relaxed text-surface-100/75 sm:text-lg">
            {t("home.hero.subtitle")}
          </motion.p>

          <motion.div {...rise(0.9)} className="mt-2 flex flex-wrap items-center gap-4">
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
          </motion.div>

          <motion.div {...rise(1.05)} className="mt-6 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-surface-100/55">
              {t("home.hero.countdownLabel")}
            </span>
            <CountdownTimer />
          </motion.div>
        </motion.div>
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
