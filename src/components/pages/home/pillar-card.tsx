import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// --- Types ---

interface PillarProps {
  icon: React.ReactNode;
  title: string;
  quote: string;
  delay?: number;
}

const PillarCard = ({ icon, title, quote, delay = 0 }: PillarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
    >
      {/* Icon Container */}
      <div className="mb-6 p-4 rounded-full bg-slate-900/80 border border-slate-700 group-hover:border-blue-400/50 group-hover:scale-110 transition-all duration-300">
        <div className="text-blue-400 w-8 h-8">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-4 tracking-wide uppercase">
        {title}
      </h3>

      {/* Quote */}
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 w-4 h-4 text-slate-600 opacity-50 rotate-180" />
        <p className="text-slate-300 text-sm leading-relaxed italic px-2">
          {quote}
        </p>
      </div>

      {/* Decorative hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default PillarCard;
