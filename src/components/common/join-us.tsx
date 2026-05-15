import { Button } from "../ui/button";

const JoinUs: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Blue Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')`,
        }}
      />

      {/* Deep Navy Blue Overlay - matching the screenshot's blue tint */}
      <div className="absolute inset-0 bg-[#1a3a5c]/90" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4 tracking-wide">
          Join us
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl mb-10 font-light">
          Take your first steps to joining the Strathallan family.
        </p>

        {/* Buttons Stack */}
        <div className="flex flex-col gap-4 w-full max-w-xs sm:max-w-sm">
          <Button className="w-full bg-[#c4a35a] hover:bg-[#b3944d] text-white font-semibold uppercase tracking-wide py-6 px-8 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] border-0">
            Request a Prospectus
          </Button>

          <Button className="w-full bg-[#c4a35a] hover:bg-[#b3944d] text-white font-semibold uppercase tracking-wide py-6 px-8 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] border-0">
            Make an Admissions Enquiry
          </Button>

          <Button className="w-full bg-[#c4a35a] hover:bg-[#b3944d] text-white font-semibold uppercase tracking-wide py-6 px-8 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] border-0">
            Arrange to Visit Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
