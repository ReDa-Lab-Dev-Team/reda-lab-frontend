// import { ArrowUpRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { type EventCardProps, EventCard } from "./event-card";
import { ArrowUpRight, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getRandomItems } from "@/utils/randomSelection";
import { fetchEvents } from "@/services/dataService";
import type { EventData } from "@/types";

const toCardProps = (data: EventData[], featured = false): EventCardProps[] =>
  data.map((event, idx) => ({
    id: (idx + 1).toString(),
    title: event.title,
    type: event.type,
    date: event.date,
    attendees: event.attendees,
    imageUrl: event.imageUrl,
    featured: idx === 0 && featured,
  }));

export default function EventsSection() {
  const [allEvents, setAllEvents] = useState<EventData[]>([]);
  const [randomEvents, setRandomEvents] = useState<EventCardProps[]>([]);

  useEffect(() => {
    fetchEvents().then((data) => {
      setAllEvents(data);
      setRandomEvents(toCardProps(getRandomItems(data, 6), true));
    });
  }, []);

  const handleRefresh = () => {
    setRandomEvents(toCardProps(getRandomItems(allEvents, 6), true));
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
