import { type ComponentType } from "react";

type ValueCardProps = {
  icon: ComponentType<{ size: number }>;
  title: string;
  desc: string;
};

const ValueCard = ({ icon: Icon, title, desc }: ValueCardProps) => (
  <div className="flex flex-col items-center text-center p-6 group">
    <div className="w-16 h-16 rounded-full border-2 border-blue-400/30 flex items-center justify-center mb-4 text-white group-hover:bg-yellow-400 group-hover:text-[#0f3a5d] group-hover:border-yellow-400 transition-all duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
    <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
  </div>
);

export {
    ValueCard,
    type ValueCardProps
}