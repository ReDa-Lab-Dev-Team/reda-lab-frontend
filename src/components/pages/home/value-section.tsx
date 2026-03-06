import { useEffect, useState } from "react";
import { Lightbulb, Search, Target, Users } from "lucide-react";
import type { ComponentType } from "react";
import { ValueCard, type ValueCardProps } from "./value-card";
import { fetchValues } from "@/services/dataService";
import type { ValueData, ValueIconName } from "@/types";

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

const ValuesSection = () => {
  const [values, setValues] = useState<ValueData[]>([]);

  useEffect(() => {
    fetchValues().then(setValues);
  }, []);

  return (
    <div className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <ValueCard key={v.id} {...toCardProps(v)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
