import { type ReactNode } from "react";
import type { PillarData, PillarIconName } from "@/types";
import { Eye, Goal, HeartPlus } from "lucide-react";
import PillarCard, { type PillarCardProps } from "./pillar-card";

// data to icon mapper
const PILLAR_ICON_MAP: Record<PillarIconName, ReactNode> = {
  Goal: <Goal className="w-12 h-12" color="#1a3a5c" />,
  Eye: <Eye className="w-12 h-12 text-[#1a3a5c]" />,
  HeartPlus: <HeartPlus className="w-12 h-12 text-[#1a3a5c]" />,
};

// final pillar having icons
interface Piller extends PillarCardProps, PillarData {
  icon: ReactNode;
}

// used pillar variable
const toPillar = (d: PillarData): Piller => ({
  ...d,
  icon: PILLAR_ICON_MAP[d.iconName],
});

export default function PillarCards({ pillars }: { pillars: PillarData[] }) {
  const mappedPillars = pillars.map(toPillar);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {mappedPillars.map((pillar, idx) => (
        <PillarCard
          key={idx}
          icon={pillar.icon}
          title={pillar.title}
          textBullets={pillar.textBullets}
        />
      ))}
    </div>
  );
}
