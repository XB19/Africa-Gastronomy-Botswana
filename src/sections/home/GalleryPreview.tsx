import { useTranslation } from "react-i18next";
import { icons } from "../../lib/icons";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { LinkButton } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { foodImages, pick } from "../../lib/images";
import { Stagger } from "../../components/motion";

export function GalleryPreview() {
  const { t } = useTranslation();
  const images = Array.from({ length: 8 }).map((_, i) => pick(foodImages, i + 8));

  return (
    <section className="bg-surface-200/50 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker={t("home.gallery.kicker")}
            title={t("home.gallery.title")}
            subtitle={t("home.gallery.subtitle")}
          />
          <LinkButton to={paths.gallery} variant="outline" icon={icons.arrowRight} className="shrink-0">
            {t("home.gallery.cta")}
          </LinkButton>
        </div>
      </Container>

      <Stagger className="mt-10 grid grid-cols-2 sm:grid-cols-4" step={0.06}>
        {images.map((src, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${i % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <img
                src={src}
                alt="Africa Gastronomy dish"
                className="h-full max-h-72 w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-primary-900/0 transition-colors duration-500 group-hover:bg-primary-900/25" />
            </div>
          ))}
      </Stagger>
    </section>
  );
}
