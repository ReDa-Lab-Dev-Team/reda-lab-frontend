import { ArrowRight, Clock, Users } from "lucide-react";

type TrainingCardProps = {
  title: string;
  description: string;
  duration: string;
  price: string;
  lecturer: string;
};

const TrainingCard = ({
  title,
  description,
  duration,
  price,
  lecturer,
}: TrainingCardProps) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col h-full">
    <div className="h-40 bg-[#fdf6e3] flex items-center justify-center relative p-6">
      {/* Decorative Graphic */}
      <div className="text-center z-10">
        <div className="text-2xl font-black text-yellow-600 tracking-tighter mb-1">
          INNOVATION
        </div>
        <div className="text-sm font-bold text-gray-700 uppercase tracking-widest">
          Challenge
        </div>
        <div className="w-full h-0.5 bg-yellow-500 my-2"></div>
        <div className="text-xs font-bold text-blue-800">
          Understand & Design
        </div>
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
      <div className="space-y-2 mb-6 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-[#0f3a5d]" />
          <span>
            Duration: <strong className="text-gray-800">{duration}</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#0f3a5d]">$</span>
          <span>
            Price: <strong className="text-gray-800">{price}</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={14} className="text-[#0f3a5d]" />
          <span>
            Lecturer: <strong className="text-gray-800">{lecturer}</strong>
          </span>
        </div>
      </div>
      <button className="w-full py-2 border-2 border-[#0f3a5d] text-[#0f3a5d] rounded font-semibold hover:bg-[#0f3a5d] hover:text-white transition flex items-center justify-center gap-2">
        Register Now <ArrowRight size={16} />
      </button>
    </div>
  </div>
);

export { TrainingCard, type TrainingCardProps };
