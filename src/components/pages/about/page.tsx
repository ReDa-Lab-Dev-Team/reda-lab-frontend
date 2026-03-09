import HeroSecondary from "@/components/common/hero-secondary";
import AboutRedaSection from "./about-reda-section";
import ResearchersSection from "./researchers-section";
import PartnersSection from "./partners-section";

export default function AboutUs() {
  return (
    <>
      <HeroSecondary
        topText="Who We Are"
        mainTitle="About Us"
        bottomText="People · Purpose · Progress"
      />
      <AboutRedaSection />;
      <ResearchersSection />;
      <PartnersSection />;
    </>
  );
}
