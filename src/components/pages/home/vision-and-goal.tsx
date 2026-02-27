import { motion } from 'framer-motion';
import { Microscope, Settings, Users, Target } from 'lucide-react';
import PillarCard from './pillar-card';

// --- Components ---
export default function PillarsSection() {
  const pillars = [
    {
      icon: <Microscope strokeWidth={1.5} />,
      title: "Research",
      quote: "Through curiosity and inquiry, we uncover knowledge that shapes the future.",
    },
    {
      icon: <Settings strokeWidth={1.5} />,
      title: "Innovation",
      quote: "Turning bold ideas into solutions that inspire progress.",
    },
    {
      icon: <Users strokeWidth={1.5} />,
      title: "Social",
      quote: "Building communities where collaboration creates shared growth.",
    },
    {
      icon: <Target strokeWidth={1.5} />,
      title: "Impact",
      quote: "Transforming knowledge into action that changes lives.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header (Optional, but good for context) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Core Pillars
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              quote={pillar.quote}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}