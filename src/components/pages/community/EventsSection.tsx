import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowUpRight } from "lucide-react";

const events = [
  { color: "#02436D", date: "Jul 12, 2025", title: "Data Hackathon 2025", desc: "A 48-hour challenge to solve real-world data problems with cross-disciplinary teams.", duration: "48hrs", seats: "Open to all" },
  { color: "#0f6e56", date: "Jul 25, 2025", title: "Research Methodology Workshop", desc: "Deep dive into mixed-methods research design for graduate students.", duration: "Full day", seats: "Max 30 seats" },
  { color: "#854f0b", date: "Aug 3, 2025", title: "AI in Society Panel", desc: "Expert panel on ethical implications of AI adoption in Southeast Asia.", duration: "2 hours", seats: "Free entry" },
  { color: "#534ab7", date: "Aug 15, 2025", title: "Data Visualization Bootcamp", desc: "Hands-on session covering Tableau, D3.js, and storytelling with data.", duration: "3 hours", seats: "Limited seats" },
  { color: "#02436D", date: "Aug 28, 2025", title: "Community Networking Night", desc: "Informal gathering for members to connect, share projects, and collaborate.", duration: "Evening", seats: "Open to all" },
  { color: "#993c1d", date: "Sep 5, 2025", title: "Publication Writing Seminar", desc: "Guidance on crafting, submitting, and publishing academic research papers.", duration: "Half day", seats: "Registration req." },
];

export default function EventsSection() {
  return (
    <section className="w-full bg-gray-50 py-20 px-16">
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
            Get Involved
          </p>
          <div className="w-12 h-px bg-[#02436D] mx-auto mb-6" />
          <h2
            className="font-cormorant font-light tracking-wide text-slate-800 uppercase"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Upcoming Events
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
            Join our workshops, seminars, and networking sessions designed for
            the research community.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="h-2" style={{ background: e.color }} />
              <div className="p-5 flex flex-col flex-1">
                <div
                  className="flex items-center gap-2 text-xs font-medium mb-3"
                  style={{ color: e.color }}
                >
                  <Calendar size={12} />
                  {e.date}
                </div>
                <h3 className="text-slate-800 font-semibold text-sm mb-2">
                  {e.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4">
                  {e.desc}
                </p>
                <div className="flex gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {e.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={11} /> {e.seats}
                  </span>
                </div>
                <button
                  className="w-full py-2 border rounded text-xs font-semibold transition hover:text-white"
                  style={{ borderColor: e.color, color: e.color }}
                  onMouseEnter={ev => {
                    (ev.target as HTMLButtonElement).style.background = e.color;
                    (ev.target as HTMLButtonElement).style.color = "white";
                  }}
                  onMouseLeave={ev => {
                    (ev.target as HTMLButtonElement).style.background = "transparent";
                    (ev.target as HTMLButtonElement).style.color = e.color;
                  }}
                >
                  Register Now
                </button>
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
            View All Events <ArrowUpRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}