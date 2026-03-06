import { Button } from "@/components/ui/button";

interface FakeSectionProps {
  titleMain: string;
  shortDescription: string;
}

const FakeSection = ({ titleMain, shortDescription }: FakeSectionProps) => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">
          {titleMain}
        </h2>

        {/* Illustration */}
        <div className="mb-8">
          <img
            src="/image_replacement.png"
            alt="Team collaboration illustration showing people working together around tables"
            className="w-full max-w-2xl mx-auto h-auto"
          />
        </div>

        {/* Description */}
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          {shortDescription}
        </p>

        {/* CTA Button */}
        <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full text-base font-medium transition-colors duration-200">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default FakeSection;
