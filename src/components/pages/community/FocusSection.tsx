import { motion } from "framer-motion";
import { BarChart2, Brain, FileText, Users, Globe, Monitor } from "lucide-react";

const focuses = [
  { icon: <BarChart2 size={28} />, bg: "#e0edf5", color: "#02436D", title: "Data Analytics", desc: "Transforming raw data into meaningful insights through statistical and computational methods." },
  { icon: <Brain size={28} />, bg: "#eeedfe", color: "#534ab7", title: "Machine Learning", desc: "Building intelligent systems that learn from data to solve complex research problems." },
  { icon: <FileText size={28} />, bg: "#e8f5ee", color: "#0f6e56", title: "Research & Policy", desc: "Bridging academic research and evidence-based policy making in Southeast Asia." },
  { icon: <Users size={28} />, bg: "#faeeda", color: "#854f0b", title: "Capacity Building", desc: "Empowering the next generation of researchers through mentorship and training." },
  { icon: <Globe size={28} />, bg: "#faece7", color: "#993c1d", title: "Open Data", desc: "Promoting transparency and accessibility of data for academic and public use." },
  { icon: <Monitor size={28} />, bg: "#fbeaf0", color: "#993556", title: "Digital Innovation", desc: "Exploring how technology reshapes research methodologies and data collection." },
];

export default function FocusSection() {
  return (
    <section className="w-full bg-white py-20 px-16">
      <div className="w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-light tracking-widest uppercase text-[#02436D] mb-3">
            Our Focus
          </p>
          <div className="w-12 h-px bg-[#02436D] mx-auto mb-6" />
          <h2
            className="font-cormorant font-light tracking-wide text-slate-800 uppercase"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Community Focus Areas
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
            We bring together diverse disciplines united by a passion for
            data-driven research.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focuses.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl p-6 border border-transparent hover:border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{ background: f.bg }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${f.color}20`, color: f.color }}
              >
                {f.icon}
              </div>

              {/* Title */}
              <h3
                className="font-semibold text-sm mb-2"
                style={{ color: f.color }}
              >
                {f.title}
              </h3>

              {/* Divider */}
              <div
                className="w-6 h-px mb-3 group-hover:w-10 transition-all duration-300"
                style={{ background: f.color }}
              />

              {/* Description */}
              <p className="text-slate-500 text-xs leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}