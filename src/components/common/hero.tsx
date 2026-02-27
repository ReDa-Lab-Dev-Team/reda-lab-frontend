const Hero = () => {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url("/ITC2.png")` }}
    >
      <div className="absolute inset-0 bg-blue-900/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to <span className="text-blue-300">ReDA Lab</span>
        </h2>

        <p className="max-w-xl text-lg mb-6">
          A Research and Data Analytics Laboratory of Department of Applied
          Mathematics and Statistics.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-medium">
            View Research Units
          </button>
          <button className="bg-blue-600 px-6 py-2 rounded-full font-medium">
            Explore Training Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;