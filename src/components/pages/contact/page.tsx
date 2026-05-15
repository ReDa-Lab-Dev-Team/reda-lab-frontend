import ContactSection from "@/components/common/contact-section";
import HeroSecondary from "@/components/common/hero-secondary";

const Contact = () => {
  return (
    <>
      <HeroSecondary
        topText="Contact Us"
        mainTitle="Get in Touch"
        bottomText="We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us."
      />
      <ContactSection />
    </>
  );
};

export default Contact;
