import HeroSecondary from "@/components/common/hero-secondary";
import CommunitySection from "@/components/pages/community/CommunitySection";

export default function CommunityPage() {
  return (
    <>
      <HeroSecondary
        topText="Join Us"
        mainTitle="Community"
        bottomText="Connect, collaborate, and grow with the ReDA Lab community."
      />
      <CommunitySection />
    </>
  );
}