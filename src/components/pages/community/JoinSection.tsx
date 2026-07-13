import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function JoinSection() {
  return (
    <section className="w-full bg-[#02436D] py-20 px-8">
      <div className="max-w-2xl mx-auto text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-light tracking-widest uppercase text-blue-200 mb-3">
            Become a Member
          </p>
          <div className="w-12 h-px bg-blue-300 mx-auto mb-6" />
          <h2
            className="font-cormorant font-light tracking-wide text-white uppercase mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Join Our Community
          </h2>
          <p className="text-blue-100 text-sm leading-relaxed mb-8">
            Whether you are a student, researcher, or industry professional —
            there is a place for you in the ReDA Lab community.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <input
            type="text"
            placeholder="Institution / Organization"
            className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <select className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-white/30">
            <option value="">Select Your Role</option>
            <option>Student</option>
            <option>Researcher</option>
            <option>Industry Professional</option>
            <option>Government Official</option>
          </select>
          <div className="sm:col-span-2">
            <Button className="w-full bg-white text-[#02436D] hover:bg-blue-50 font-semibold py-3 rounded-lg text-sm transition">
              Join the Community
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}