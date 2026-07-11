import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const members = [
  { initials: "SR", name: "Sophea Rith", role: "Lead Data Scientist", badge: "Research Lead", bg: "#e0edf5", color: "#02436D" },
  { initials: "DK", name: "Dara Keo", role: "PhD Researcher", badge: "Academia", bg: "#e8f5ee", color: "#0f6e56" },
  { initials: "MH", name: "Menghour Hak", role: "ML Engineer", badge: "Industry", bg: "#faeeda", color: "#854f0b" },
  { initials: "LP", name: "Lina Pov", role: "Policy Analyst", badge: "Government", bg: "#eeedfe", color: "#534ab7" },
  { initials: "VN", name: "Vibol Noun", role: "Data Journalist", badge: "Media", bg: "#faece7", color: "#993c1d" },
  { initials: "RC", name: "Rachana Chan", role: "UX Researcher", badge: "Research Lead", bg: "#e0edf5", color: "#02436D" },
  { initials: "BL", name: "Bora Ly", role: "Statistician", badge: "Academia", bg: "#e8f5ee", color: "#0f6e56" },
  { initials: "KP", name: "Kolab Pen", role: "AI Developer", badge: "Industry", bg: "#faeeda", color: "#854f0b" },
];

export default function MembersSection() {
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
            Who We Are
          </p>
          <div className="w-12 h-px bg-[#02436D] mx-auto mb-6" />
          <h2
            className="font-cormorant font-light tracking-wide text-slate-800 uppercase"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Featured Members
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
            Meet the researchers, analysts, and data enthusiasts driving our
            community forward.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Solid Color Profile Area */}
              <div
                className="h-40 flex items-center justify-center"
                style={{ background: m.bg }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-semibold group-hover:scale-110 transition-transform duration-300"
                  style={{ background: m.color, color: "white" }}
                >
                  {m.initials}
                </div>
              </div>

              {/* Accent bar */}
              <div className="h-1 w-full" style={{ background: m.color }} />

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-slate-800 font-semibold text-sm mb-1">
                  {m.name}
                </h3>
                <p className="text-slate-400 text-xs mb-3">{m.role}</p>
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: m.bg, color: m.color }}
                >
                  {m.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <button className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#02436D] text-[#02436D] text-sm font-medium rounded-full hover:bg-[#02436D] hover:text-white transition-all duration-200">
            View All Members <ArrowUpRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}