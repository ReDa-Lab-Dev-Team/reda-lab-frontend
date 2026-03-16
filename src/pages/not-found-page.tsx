import FakeSection from "@/components/common/fake-section";
import HeroSecondary from "@/components/common/hero-secondary";

export default function NotFoundPage() {
  return (
    <>
      <HeroSecondary
        topText="404 Error"
        mainTitle="Not Found"
        bottomText="Sorry, the page you are looking for does not exist."
      />
      <FakeSection
        titleMain="Page Not Found"
        shortDescription="The page you are looking for does not exist. Please check the URL or return to the homepage."
      />
    </>
  );
}
