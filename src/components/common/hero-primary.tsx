const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Dark Overlay to match the deep blue of the image */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(4, 27, 51, 0.95), rgba(7, 45, 82, 0.85)), url('/homepage-background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      ></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto md:ml-[10%]">
          {/* Small Gold Heading */}
          <h2 className="text-[#c89b51] font-medium mb-6 tracking-[0.2em] uppercase text-xs sm:text-sm">
            Welcome to
          </h2>
          
          {/* Large Typography with Inline Gold Underlines */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-snug sm:leading-snug md:leading-snug lg:leading-[1.3] font-normal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
           <span className="inline-block border-b-[2px] border-[#c89b51] pb-1 leading-none mx-1 text-white/95">
            ReDA Lab
           </span>{" "}
           (Research and Data Analytics Laboratory) is a division of the 
           <span className="inline-block border-b-[2px] border-[#c89b51] pb-1 leading-none mx-1 text-white/95">
            Applied Mathematics and Statistics
           </span>{" "}
           at the
           <span className="inline-block border-b-[2px] border-[#c89b51] pb-1 leading-none mx-1 text-white/95">
             Institute of Technology of Cambodia.
           </span>{" "}
           It serves as a collaborative community and innovation hub for research and data analytics.
          </h1>

          <div className="flex flex-wrap gap-6 mt-16">
            <button className="bg-[#c89b51] text-[#041b33] px-8 py-3 rounded-full font-semibold hover:bg-white transition flex items-center gap-2 text-sm tracking-wide">
              View Research Units
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition flex items-center gap-2 text-sm tracking-wide">
              Explore Training Service
            </button>
          </div>
        </div>
      </div>
      
      {/* Optional Side Decor or Icons could go here if needed to mimic the bottom-right icons in the image */}
    </div>
  );
};

export default Hero;
