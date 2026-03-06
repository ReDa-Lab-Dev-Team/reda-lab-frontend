import FakeSection from "@/components/common/fake-section";
import SecondaryHero from "@/components/common/secondary-hero";

export default function NotFoundPage() {
  return (
    <>
      <SecondaryHero
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
