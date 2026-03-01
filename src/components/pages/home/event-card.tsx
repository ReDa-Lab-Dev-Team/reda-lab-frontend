import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, PlayCircle, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type EventType = "Bootcamp" | "Workshop" | "Conference" | "Seminar";

interface EventCardProps {
  id: string;
  title: string;
  type: EventType;
  date: string;
  attendees: number;
  imageUrl: string;
  featured?: boolean;
}

const EventCard = ({
  event,
  index,
}: {
  event: EventCardProps;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300",
        event.featured ? "md:col-span-2 md:row-span-2" : "col-span-1",
      )}
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden md:h-full">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Top Right Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm">
            {event.type}
          </Badge>
        </div>

        {/* Play Button (Visual only) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-50">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md ring-1 ring-white/50">
            <PlayCircle className="h-6 w-6 text-white fill-white" />
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center gap-3 text-xs font-medium text-slate-300 mb-2">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {event.date}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {event.attendees} Attendees
          </span>
        </div>

        <h3
          className={cn(
            "font-bold leading-tight tracking-tight text-white mb-2",
            event.featured ? "text-2xl md:text-3xl" : "text-lg",
          )}
        >
          {event.title}
        </h3>

        <div className="flex items-center text-sm font-medium text-blue-300 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <a href="#" className="flex items-center">
            View Details <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export { EventCard, type EventCardProps };
