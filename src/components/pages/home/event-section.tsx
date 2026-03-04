// import { ArrowUpRight } from "@phosphor-icons/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { type EventCardProps, EventCard } from "./event-card";
import { ArrowUpRight, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getRandomItems } from "@/utils/randomSelection";

const events: EventCardProps[] = [
  {
    id: "1",
    title: "Data Science Bootcamp 2025",
    type: "Bootcamp",
    date: "Jan 15, 2025",
    attendees: 120,
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    title: "AI for Good Workshop",
    type: "Workshop",
    date: "Feb 02, 2025",
    attendees: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    title: "Scientific Day Symposium",
    type: "Conference",
    date: "Mar 10, 2025",
    attendees: 300,
    imageUrl:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    title: "Advanced Python Seminar",
    type: "Seminar",
    date: "Mar 22, 2025",
    attendees: 80,
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "5",
    title: "Global Data Summit",
    type: "Conference",
    date: "Apr 05, 2025",
    attendees: 500,
    imageUrl:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "6",
    title: "Deep Learning Workshop",
    type: "Conference",
    date: "Apr 05, 2025",
    attendees: 500,
    imageUrl:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "7",
    title: "Machine Learning Expo",
    type: "Conference",
    date: "Apr 05, 2025",
    attendees: 500,
    imageUrl:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
  },
];

// const sixRandomEvents: EventCardProps[] = getRandomItems(events, 6).map(
//   (event, idx) => ({
//     ...event,
//     id: (idx + 1).toString(),
//     featured: idx === 0,
//   }),
// );
// console.table(sixRandomEvents);

// refresh handler
// const handleRefresh = () => {
//   const newRandomEvents = getRandomItems(events, 6).map((event, idx) => ({
//     ...event,
//     id: (idx + 1).toString(),
//   }))
// };

export default function EventsSection() {
  const [randomEvents, setRandomEvents] = useState<EventCardProps[]>(() =>
    getRandomItems(events, 6).map((event, idx) => ({
      ...event,
      id: (idx + 1).toString(),
      featured: idx === 0,
    })),
  );
  console.table(randomEvents);

  const handleRefresh = () => {
    const newRandomEvents = getRandomItems(events, 6).map((event, idx) => ({
      ...event,
      id: (idx + 1).toString(),
      featured: idx === 0,
    }));
    setRandomEvents(newRandomEvents);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
            >
              Recent Events
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 max-w-md text-lg"
            >
              Explore our latest workshops, bootcamps, and conferences designed
              to elevate your skills.
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRefresh}
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            Refresh
            <RefreshCcw className="ml-2 h-4 w-4" />
          </motion.button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {randomEvents.map((event, index) => (
            <EventCard event={event} index={index} />
          ))}
        </div>

        {/* button to view more events */}
        <div className="text-center mt-12 pb-6">
          <Button className="bg-[#0f3a5d] text-white px-8 py-3 rounded-full font-medium hover:bg-[#164771] transition shadow-lg hover:shadow-xl">
            View More Events
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
