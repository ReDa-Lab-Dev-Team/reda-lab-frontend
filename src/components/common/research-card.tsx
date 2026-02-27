const ResearchCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="bg-gray-200 rounded-2xl h-72 shadow-md"></div>

      <div>
        <h3 className="text-2xl font-semibold text-white mb-4">
          LLM Application & Research Club
        </h3>

        <p className="text-gray-200 mb-4">
          Explore cutting-edge technologies in LLMs and apply them to real
          world challenges.
        </p>

        <button className="bg-white text-blue-900 px-5 py-2 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ResearchCard;