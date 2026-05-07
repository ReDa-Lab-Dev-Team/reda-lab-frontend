import ScatteredCirclesLayout from "@/components/common/scattered-circles-layout";
import researchUnits from "@/data/researchUnits";

const ResearchUnitSection = () => {
  return (
    <section id="research" className="w-full">
      <ScatteredCirclesLayout
        title="Our holistic approach"
        subtitle="RESEARCH UNITS"
        items={researchUnits}
        showDiscoverButton={true}
      />
    </section>
  );
};

export default ResearchUnitSection;
