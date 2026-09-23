import { useTranslation } from "react-i18next";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { ArrowButton } from "../../components/ui/ArrowButton";
import { paths } from "../../router/paths";
import { Link } from "react-router-dom";

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
        <div className="grid grid-cols-1 gap-px bg-ink-800/8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.title}
              to={paths.programmes}
              className="group flex flex-col gap-5 bg-white p-8"
            >
              <h3 className="font-display text-xl font-semibold text-terracotta-700">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-500">{item.text}</p>
              <ArrowButton className="mt-auto" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
