import { useTranslation } from "react-i18next";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ugandaChallenge, ugandaFood } from "../lib/images";
import { Reveal, Stagger } from "../components/motion";

const videos = [
  { src: "/videos/day3-highlights.mp4", title: "Day 3 Highlight Film", poster: ugandaChallenge[43] },
  { src: "/videos/day2-montage.mp4", title: "Day 2 Montage", poster: ugandaChallenge[12] },
  { src: "/videos/day1-opening.mp4", title: "Day 1", poster: ugandaChallenge[3] },
];

export default function UgandaChallenge() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        kicker={t("uganda.hero.kicker")}
        title={t("uganda.hero.title")}
        subtitle={t("uganda.intro")}
        image={ugandaChallenge[43]}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-14">
          <SectionHeading kicker={t("uganda.kicker")} title={t("uganda.videosTitle")} subtitle={t("uganda.note")} />
          <Stagger step={0.12} className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {videos.map((v) => (
              <figure key={v.src} className="flex flex-col gap-3">
                <video
                  controls
                  preload="none"
                  poster={v.poster}
                  className="aspect-video w-full bg-ink-900 object-cover"
                >
                  <source src={v.src} type="video/mp4" />
                </video>
                <figcaption className="text-sm font-semibold text-ink-700">{v.title}</figcaption>
              </figure>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-surface-200/50 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading title={t("uganda.foodTitle")} subtitle={t("uganda.foodText")} />
          <Stagger step={0.03} className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
            {ugandaFood.map((src, i) => (
              <img key={src} src={src} alt={`Dish ${i + 1}`} loading="lazy" className="w-full object-cover" />
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading title={t("uganda.momentsTitle")} subtitle={t("uganda.momentsText")} />
          </Reveal>
          <Stagger step={0.03} className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
            {ugandaChallenge.map((src, i) => (
              <img key={src} src={src} alt={`Challenge moment ${i + 1}`} loading="lazy" className="w-full object-cover" />
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
