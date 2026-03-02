const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.85),  rgba(0, 89, 149, 0.9)), url('/homepage-background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      ></div>

      {/* Abstract Background Shapes */}
      {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/20 -skew-x-12 translate-x-20 pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none z-10"></div> */}

      <div
        className="absolute inset-0 bg-black bg-opacity-30 z-0"
        // className="absolute inset-0 z-0"
        aria-hidden="true"
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-blue-300 font-medium mb-2 tracking-wide uppercase text-sm">
            Welcome to
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            ReDA Lab
          </h1>
          <p className="text-xl text-blue-100 mb-4 font-light">
            A Research and Data Analytics Laboratory of <br />
            <span className="font-semibold text-white">
              Department of Applied Mathematics and Statistics
            </span>
          </p>
          <p className="text-blue-200 mb-8 max-w-2xl leading-relaxed">
            in Institute of Technology of Cambodia. A community of thinkers and
            doers — driving Research, sparking Innovation, strengthening Social
            bonds, and creating lasting Impact.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-[#0f3a5d] px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition flex items-center gap-2">
              View Research Units
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition flex items-center gap-2">
              Explore Training Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
