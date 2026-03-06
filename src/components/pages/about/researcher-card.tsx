import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CircleSlash2, HeartPlus } from "lucide-react";

type ResearcherProps = {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
};

const ResearcherCard = ({
  researcher,
  index,
}: {
  researcher: ResearcherProps;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col items-center text-center"
    >
      {/* Image Container with decorative border */}
      <div className="relative mb-4 w-full aspect-[3/4] max-w-[200px]">
        {/* Decorative Corner Accent */}
        <div className="absolute -top-2 -right-2 w-12 h-12 border-t-4 border-r-4 border-amber-400 rounded-tr-3xl z-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

        {/* Decorative Corner Accent - Bottom Left */}
        <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-3xl z-0 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />

        {/* Main Image Wrapper */}
        <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl bg-slate-100 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
          <img
            src={researcher.imageUrl}
            alt={researcher.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover Overlay with Socials */}
          <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <Button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-primary transition-colors">
              <CircleSlash2 size={18} />
            </Button>
            <Button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-primary transition-colors">
              <HeartPlus size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-1">
        <h3 className="font-bold text-primary text-sm md:text-base group-hover:text-amber-400 transition-colors">
          {researcher.name}
        </h3>
        <p className="text-xs md:text-sm text-slate-500 font-medium leading-tight max-w-[200px] mx-auto">
          {researcher.title}
        </p>
      </div>
    </motion.div>
  );
};

export { type ResearcherProps, ResearcherCard };
