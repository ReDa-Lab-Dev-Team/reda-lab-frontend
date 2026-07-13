import { motion } from "framer-motion";

const partners = [
  { abbr: "ITC", name: "Institute of Technology of Cambodia" },
  { abbr: "RUPP", name: "Royal University of Phnom Penh" },
  { abbr: "NUM", name: "National University of Management" },
  { abbr: "CADT", name: "Cambodia Academy of Digital Technology" },
  { abbr: "AUPP", name: "American University of Phnom Penh" },
];

export default function PartnersSection() {
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
            Our Network
          </p>
          <div className="w-12 h-px bg-[#02436D] mx-auto mb-6" />
          <h2
            className="font-cormorant font-light tracking-wide text-slate-800 uppercase"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Partner Institutions
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
            We collaborate with leading academic and research institutions
            across the region.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 hover:border-[#02436D]/20"
            >
              {/* Top accent line */}
              <div className="w-8 h-1 bg-[#02436D] rounded-full mx-auto mb-4 group-hover:w-12 transition-all duration-300" />

              {/* Abbreviation */}
              <p className="text-[#02436D] font-bold text-2xl mb-2 tracking-wide">
                {p.abbr}
              </p>

              {/* Full name */}
              <p className="text-slate-500 text-xs leading-snug">
                {p.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}