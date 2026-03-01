import Hero from "@/components/common/hero";
import ResearchUnitCollection from "./research-unit-section";
import ValuesSection from "./value-section";

const Home = () => {
  return (
    <>
      <Hero />
      <ValuesSection />
      <div className="min-h-screen bg-[#082035] flex items-center justify-center">
        <ResearchUnitCollection />
      </div>
    </>
  );
};

export default Home;
