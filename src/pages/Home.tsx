import { Hero } from "../sections/home/Hero";
import { Intro } from "../sections/home/Intro";
import { VisionMission } from "../sections/home/VisionMission";
import { FeaturedActivities } from "../sections/home/FeaturedActivities";
import { ProgrammesHighlight } from "../sections/home/ProgrammesHighlight";
import { CountriesSection } from "../sections/home/CountriesSection";
import { ChefsPreview } from "../sections/home/ChefsPreview";
import { DashboardSection } from "../sections/home/DashboardSection";
import { UgandaSection } from "../sections/home/UgandaSection";
import { GalleryPreview } from "../sections/home/GalleryPreview";
import { PartnersSection } from "../sections/home/PartnersSection";
import { RegisterCta } from "../sections/home/RegisterCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <VisionMission />
      <FeaturedActivities />
      <ProgrammesHighlight />
      <CountriesSection />
      <ChefsPreview />
      <DashboardSection />
      <UgandaSection />
      <GalleryPreview />
      <PartnersSection />
      <RegisterCta />
    </>
  );
}
