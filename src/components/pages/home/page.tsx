import Hero from "@/components/common/hero";
import ValuesSection from "./value-section";
import ResearchUnitCollection from "./research-unit-section";
import FeaturedProjects from "./project-section";
import TrainingServices from "./training-service-section";

const Home = () => {
  return (
    <>
      <Hero />
      <ValuesSection />
      <ResearchUnitCollection />
      <FeaturedProjects />
      <TrainingServices />
    </>
  );
};

export default Home;
