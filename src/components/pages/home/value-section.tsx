import { Lightbulb, Search, Target, Users } from "lucide-react";
import type { ComponentType } from "react";
import { ValueCard, type ValueCardProps } from "./value-card";

// interface for static values data
// ── Values ──────────────────────────────────────────────────────────────────
export type ValueIconName = "Search" | "Lightbulb" | "Users" | "Target";
export interface ValueData {
  id: number;
  iconName: "Search" | "Lightbulb" | "Users" | "Target";
  title: string;
  desc: string;
}

// Map serialisable icon names → Lucide components (resolved at render time)
const ICON_MAP: Record<ValueIconName, ComponentType<{ size: number }>> = {
  Search,
  Lightbulb,
  Users,
  Target,
};

const toCardProps = (d: ValueData): ValueCardProps => ({
  icon: ICON_MAP[d.iconName],
  title: d.title,
  desc: d.desc,
});

// Static values data
const STATIC_VALUES: ValueData[] = [
  {
    id: 1,
    iconName: "Search",
    title: "Powerful Search",
    desc: "Find what you need instantly with our advanced search tools.",
  },
  {
    id: 2,
    iconName: "Lightbulb",
    title: "Innovative Solutions",
    desc: "We bring creative ideas to solve your toughest challenges.",
  },
  {
    id: 3,
    iconName: "Users",
    title: "Community Focused",
    desc: "Our platform is built for and by our vibrant community.",
  },
  {
    id: 4,
    iconName: "Target",
    title: "Goal Oriented",
    desc: "We help you achieve your objectives efficiently and effectively.",
  },
];

const ValuesSection = () => {
  return (
    <div className="bg-primary py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATIC_VALUES.map((v) => (
            <ValueCard key={v.id} {...toCardProps(v)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
