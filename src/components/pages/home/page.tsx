import Hero from "@/components/common/hero-primary";
import ValuesSection from "./value-section";
import ResearchUnitSection from "./research-unit-section";
// import FeaturedProjects from "./project-section";
import InvitationSection from "@/components/common/invitation-section";
import TrainingServices from "./training-service-section";
import EventsSection from "./event-section";

const Home = () => {
  return (
    <>
      <Hero />
      <ValuesSection />
      <ResearchUnitSection />
      {/* <FeaturedProjects /> */}
      <TrainingServices />
      <EventsSection />
      <InvitationSection />
    </>
  );
};

export default Home;
