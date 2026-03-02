import { type ResearchUnitProps, ResearchUnitCard } from "./research-unit-card"; // Importing the type for props
import { motion, AnimatePresence } from "framer-motion";
import CenteredTitle from "@/components/common/centered-title";
import { getRandomItems } from "@/utils/randomSelection";
import { useEffect, useState } from "react";

// // --- Mock Data (Based on your image) ---
const unitData: ResearchUnitProps[] = [
  {
    title: "LLM Application & Research Club",
    description:
      "Explore cutting-edge technologies in large language models (LLMs) and apply them to real-world challenges, from AI assistants to Khmer NLP and model optimization.",
    coreTheme:
      "LLM fine-tuning, architecture optimization, applied LLMs, Khmer NLP.",
    leaders: ["Ngen Tina", "Phat Soma Nita"],
    imageUrl: "/meymey_siv_aquared.png", // Placeholder AI image
  },
  {
    title: "Rizzing Clubs",
    description:
      "Explore cutting-edge technologies in large language models (LLMs) and apply them to real-world challenges, from AI assistants to Khmer NLP and model optimization.",
    coreTheme:
      "LLM fine-tuning, architecture optimization, applied LLMs, Khmer NLP.",
    leaders: ["Ngen Tina", "Phat Soma Nita"],
    imageUrl: "/b_sl_o.jpg", // Placeholder AI image
  },
];

const REFRESH_INTERVAL = 5000; // 5 seconds

const ResearchUnitSection = () => {
  const [randomUnit, setRandomUnit] = useState<ResearchUnitProps>(
    () => getRandomItems(unitData, 1)[0],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomUnit(getRandomItems(unitData, 1)[0]);
    }, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="research" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredTitle title="Our Research Units" className="text-white" />
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={randomUnit.title + randomUnit.leaders.join(",")}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              <ResearchUnitCard {...randomUnit} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ResearchUnitSection;
