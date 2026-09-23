import { useTranslation } from "react-i18next";
import { icons } from "../../lib/icons";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { LinkButton } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { foodImages, pick } from "../../lib/images";

export function GalleryPreview() {
  const { t } = useTranslation();
  const images = Array.from({ length: 8 }).map((_, i) => pick(foodImages, i + 8));

  return (
    <section className="bg-cream-200/50 py-16 sm:py-20">
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

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4">
        {images.map((src, i) => (
            <div
              key={i}
              className={`group overflow-hidden ${i % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <img
                src={src}
                alt="Africa Gastronomy dish"
                className="h-full max-h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
      </div>
    </section>
  );
}
