import { motion } from "framer-motion";
import { Users, BookOpen, CalendarDays, Building2 } from "lucide-react";

const stats = [
  { number: "500+", label: "Community Members", icon: <Users size={28} className="text-[#02436D]" /> },
  { number: "48", label: "Research Projects", icon: <BookOpen size={28} className="text-[#02436D]" /> },
  { number: "120+", label: "Events Held", icon: <CalendarDays size={28} className="text-[#02436D]" /> },
  { number: "32", label: "Partner Institutions", icon: <Building2 size={28} className="text-[#02436D]" /> },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-16">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition flex flex-col items-center"
          >
            <div className="mb-3 p-3 bg-blue-50 rounded-full">
              {stat.icon}
            </div>
            <p className="text-3xl font-semibold text-[#02436D]">
              {stat.number}
            </p>
            <p className="text-slate-500 text-sm mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}