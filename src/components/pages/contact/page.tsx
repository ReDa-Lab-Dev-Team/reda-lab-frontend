import HeroSecondary from "@/components/common/hero-secondary";
import ContactInfo from "./contact-info";
import ContactMap from "./contact-map";
const Contact = () => {
  return (
    <>
      <HeroSecondary
        topText="Contact Us"
        mainTitle="Get in Touch"
        bottomText="We'd love to hear from you! Whether you have questions, feedback, or just want to say hello."
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ContactInfo />
          <ContactMap />
        </div>
      </section>
    </>
  );
};
export default Contact;