import Hero from "@/components/common/hero";
// import SectionTitle from "@/components/common/section-title";
// import ResearchCard from "@/components/common/research-card";
// import { ProjectCard } from "@/components/common/project-card";
import {ResearchUnitCard, unitData} from "./research-unit";
// import TrainingCard from "@/components/common/training-card";
// import EventCard from "@/components/common/event-card";

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <div className="min-h-screen bg-[#082035] flex items-center justify-center">
        <ResearchUnitCard {...unitData} />
      </div>
    </>
  );
};

export default Home;
