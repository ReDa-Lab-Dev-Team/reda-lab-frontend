import { type ResearchUnitProps, ResearchUnitCard } from "./research-unit-card";
import { motion, AnimatePresence } from "framer-motion";
import PrimarySectionHeader from "@/components/common/primary-section-header";
import { getRandomItems } from "@/utils/randomSelection";
import { useEffect, useState } from "react";
import { fetchResearchUnits } from "@/services/dataService";
import type { ResearchUnitData } from "@/types";

const toCardProps = (d: ResearchUnitData): ResearchUnitProps => ({
  title: d.title,
  description: d.description,
  coreTheme: d.coreTheme,
  leaders: d.leaders,
  imageUrl: d.imageUrl,
});

const REFRESH_INTERVAL = 5000;

const ResearchUnitSection = () => {
  const [units, setUnits] = useState<ResearchUnitData[]>([]);
  const [randomUnit, setRandomUnit] = useState<ResearchUnitProps | null>(null);

  useEffect(() => {
    fetchResearchUnits().then((data) => {
      setUnits(data);
      if (data.length > 0)
        setRandomUnit(toCardProps(getRandomItems(data, 1)[0]));
    });
  }, []);

  useEffect(() => {
    if (units.length === 0) return;
    const interval = setInterval(() => {
      setRandomUnit(toCardProps(getRandomItems(units, 1)[0]));
    }, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [units]);

  return (
    <section id="research" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrimarySectionHeader
          title="Our Research Units"
          className="text-white"
        />
        <div>
          <AnimatePresence mode="wait">
            {randomUnit && (
              <motion.div
                key={randomUnit.title + randomUnit.leaders.join(",")}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <ResearchUnitCard {...randomUnit} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ResearchUnitSection;
