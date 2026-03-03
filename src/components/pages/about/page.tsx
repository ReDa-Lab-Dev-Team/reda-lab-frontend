import SecondaryHero from "@/components/common/secondary-hero";
import AboutRedaSection from "./about-reda-section";
import ResearchersSection from "./researchers-section";
import PartnersSection from "./partners-section";

export const AboutUs = () => {
  return (
    <>
      <SecondaryHero
        topText="Who We Are"
        mainTitle="About Us"
        bottomText="People · Purpose · Progress"
      />
      <AboutRedaSection />;
      <ResearchersSection />;
      <PartnersSection />;
    </>
  );
};
