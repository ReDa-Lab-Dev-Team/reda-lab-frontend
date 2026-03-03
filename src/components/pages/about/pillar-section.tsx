import React from "react";

// Define the type for the pillars prop
interface Pillar {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

interface PillarSectionProps {
  pillars: Pillar[];
}

const PillarSection: React.FC<PillarSectionProps> = ({ pillars }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {pillars.map((pillar, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-3">{pillar.icon}</div>

          {/* Title */}
          <h3 className="text-base font-semibold mb-2 text-[#e8a020]">
            {pillar.title}
          </h3>

          {/* Divider with dot */}
          <div className="flex items-center gap-1 mb-4 ">
            <div className="h-px w-10 bg-[#e8a020]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#e8a020]" />
            <div className="h-px w-10 bg-[#e8a020]" />
          </div>

          {/* List */}
          <ul className="text-left text-sm text-gray-700 space-y-2 w-full">
            {pillar.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#e8a020]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export { PillarSection, type Pillar };
