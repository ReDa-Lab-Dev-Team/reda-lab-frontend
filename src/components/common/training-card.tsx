const TrainingCard = () => {
  return (
    <div className="bg-blue-900 text-white rounded-2xl p-4 shadow-lg">
      <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>

      <h4 className="font-semibold mb-2">Introduction to Power BI</h4>

      <p className="text-sm mb-4">
        Learn how to connect and visualize data using Power BI.
      </p>

      <button className="bg-yellow-400 text-black px-4 py-2 rounded-full">
        Register Now
      </button>
    </div>
  );
};

export default TrainingCard;