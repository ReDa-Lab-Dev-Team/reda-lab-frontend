import HeroSecondary from "@/components/common/hero-secondary";
import ScatteredCirclesLayout from "@/components/common/scattered-circles-layout";
import researchUnits from "@/data/researchUnits";
import ResearchUnitsCarousel from "./research-units-carousel";

export default function Research() {
  return (
    <>
      <HeroSecondary
        topText="Research Facilities"
        mainTitle="Research Unit"
        bottomText="Building a better future through research and innovation"
      />
      <section className="w-full">
        <ScatteredCirclesLayout
          title="Our holistic approach"
          subtitle="RESEARCH UNITS"
          items={researchUnits}
          showDiscoverButton={false}
        />
      </section>
      <ResearchUnitsCarousel />
    </>
  );
}
