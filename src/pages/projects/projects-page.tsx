import { Projects } from "@/components/pages/projects/page";
import HeroSecondary from "@/components/common/hero-secondary";

export default function ProjectPage() {
  return (
    <>
      <HeroSecondary
        topText="Projects"
        mainTitle="Projects"
        bottomText="Building a better future through research and innovation"
      />
      <Projects />;
    </>
  );
}
