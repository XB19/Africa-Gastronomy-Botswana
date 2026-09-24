import { useTranslation } from "react-i18next";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { ArrowButton } from "../../components/ui/ArrowButton";
import { paths } from "../../router/paths";
import { Link } from "react-router-dom";
import { Stagger } from "../../components/motion";

export function FeaturedActivities() {
  const { t } = useTranslation();
  const items = t("home.activities.items", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          kicker={t("home.activities.kicker")}
          title={t("home.activities.title")}
          subtitle={t("home.activities.subtitle")}
        />
        <Stagger className="grid grid-cols-1 gap-px bg-ink-800/8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.title}
              to={paths.programmes}
              className="group relative transition-shadow duration-300 hover:z-10 hover:shadow-2xl hover:shadow-ink-900/10 flex flex-col gap-5 bg-white p-8"
            >
              <h3 className="font-display text-xl font-semibold text-primary-700 transition-colors group-hover:text-primary-500">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-500">{item.text}</p>
              <ArrowButton className="mt-auto" />
            </Link>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
