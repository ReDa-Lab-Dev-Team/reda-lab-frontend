import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const news = [
  { tag: "Announcement", title: "ReDA Lab Launches New Open Data Portal", excerpt: "We are proud to announce the launch of our open data platform providing free access to curated research datasets.", date: "Jun 28, 2025", read: "3 min read" },
  { tag: "Research", title: "New Study on Digital Literacy in Cambodia Published", excerpt: "Our latest collaborative research paper on digital literacy rates has been accepted by an international journal.", date: "Jun 15, 2025", read: "5 min read" },
  { tag: "Event Recap", title: "Data Hackathon 2024 — Highlights & Winners", excerpt: "A look back at our most successful hackathon yet, with over 120 participants and 18 project submissions.", date: "May 30, 2025", read: "4 min read" },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  Announcement: { bg: "#e0edf5", text: "#02436D" },
  Research: { bg: "#e8f5ee", text: "#0f6e56" },
  "Event Recap": { bg: "#faeeda", text: "#854f0b" },
};

export default function NewsSection() {
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
            Stay Informed
          </p>
          <div className="w-12 h-px bg-[#02436D] mx-auto mb-6" />
          <h2
            className="font-cormorant font-light tracking-wide text-slate-800 uppercase"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Community News
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
            Latest updates, announcements, and highlights from the ReDA Lab
            community.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {news.map((n, i) => {
            const tagStyle = tagColors[n.tag] ?? { bg: "#e0edf5", text: "#02436D" };
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: tagStyle.text }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Tag */}
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium mb-4 self-start"
                    style={{ background: tagStyle.bg, color: tagStyle.text }}
                  >
                    {n.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-slate-800 font-semibold text-sm mb-2 leading-snug">
                    {n.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-6 h-px bg-slate-200 mb-3" />

                  {/* Excerpt */}
                  <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4">
                    {n.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex justify-between items-center text-xs text-slate-400 border-t border-gray-100 pt-3">
                    <span>{n.date} · {n.read}</span>
                    <span className="flex items-center gap-1 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: tagStyle.text }}>
                      Read More <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
            View All News <ArrowUpRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}