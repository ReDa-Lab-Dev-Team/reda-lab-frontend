import HeroSecondary from "@/components/common/hero-secondary";
import ResearchUnitsCarousel from "./research-units-carousel";
import ResearchAchievements from "@/components/common/research-archievements";
import InvitationSection from "@/components/common/invitation-section";

export default function Research() {
  return (
    <>
      <HeroSecondary
        topText="Research Facilities"
        mainTitle="Research Unit"
        bottomText="Building a better future through research and innovation"
      />
      <ResearchUnitsCarousel />
      <ResearchAchievements />
      <InvitationSection />
    </>
  );
}
