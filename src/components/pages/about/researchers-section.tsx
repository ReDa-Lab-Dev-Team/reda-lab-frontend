import { useEffect, useState } from "react";
import { type ResearcherProps, ResearcherCard } from "./researcher-card";
import SecondarySectionHeader from "../../common/secondary-section-header";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchResearchers } from "@/services/dataService";
import type { ResearcherData } from "@/types";

const toCardProps = (d: ResearcherData): ResearcherProps => ({
  id: d.id,
  name: d.name,
  title: d.title,
  imageUrl: d.imageUrl,
});

export default function ResearchersSection() {
  const [researchers, setResearchers] = useState<ResearcherData[]>([]);

  useEffect(() => {
    fetchResearchers().then(setResearchers);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SecondarySectionHeader
          title="Our Researchers"
          description="Meet the brilliant minds behind our research initiatives."
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10 md:gap-y-12">
          {researchers.map((researcher, index) => (
            <ResearcherCard
              key={researcher.id}
              researcher={toCardProps(researcher)}
              index={index}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center">
          <Button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl active:scale-95 transform duration-200">
            View All Researchers
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
