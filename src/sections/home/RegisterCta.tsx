import { useTranslation } from "react-i18next";
import { icons } from "../../lib/icons";
import { Container } from "../../components/ui/Container";
import { LinkButton } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { foodImages, pick } from "../../lib/images";
import { ParallaxImage, Reveal } from "../../components/motion";

export function RegisterCta() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-5xl">
        <Reveal className="relative aspect-[4/1] w-full overflow-hidden">
          <ParallaxImage src={pick(foodImages, 20)} strength={40} />
          <div className="absolute inset-0 bg-ink-900/60" />
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-5 sm:p-8">
            <div className="max-w-md bg-ink-900/85 px-5 py-4">
              <span className="block font-display text-lg font-bold uppercase leading-tight text-surface-50 sm:text-xl">
                {t("home.registerCta.title")}
              </span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.1em] text-primary-300">
                {t("meta.eventName")}
              </span>
            </div>
            <LinkButton to={paths.register} icon={icons.arrowRight}>
              {t("home.registerCta.cta")}
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
