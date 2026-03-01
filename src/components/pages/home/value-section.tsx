import { Lightbulb, Search, Target, Users } from "lucide-react";
import { ValueCard, type ValueCardProps } from "./value-card";

const values: ValueCardProps[] = [
  {
    icon: Search,
    title: "Research",
    desc: "Through curiosity and inquiry, we uncover knowledge that shapes the future.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Turning bold ideas into solutions that inspire progress.",
  },
  {
    icon: Users,
    title: "Social",
    desc: "Building communities where collaboration creates shared growth.",
  },
  {
    icon: Target,
    title: "Impact",
    desc: "Transforming knowledge into action that changes lives.",
  },
];

const ValuesSection = () => {
  return (
    <div className="bg-[#0a2a45] py-12 border-b border-blue-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, idx) => (
            <ValueCard key={idx} {...v} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
