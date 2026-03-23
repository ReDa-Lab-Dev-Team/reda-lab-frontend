import HeroSecondary from "@/components/common/hero-secondary";
import Publications from "@/components/pages/publications/page";

export default function PublicationPage() {
  return (
    <>
      <HeroSecondary
        topText="Publications"
        mainTitle="Publications"
        bottomText="Building a better future through research and innovation"
      />
      <Publications />
    </>
  );
}
