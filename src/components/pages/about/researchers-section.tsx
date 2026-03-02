import { type ResearcherProps, ResearcherCard } from "./researcher-card";
import SecondarySectionHeader from "../../common/secondary-section-header";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const RESEARCHERS: ResearcherProps[] = Array.from({ length: 12 }).map(
  (_, i) => ({
    id: `researcher-${i}`,
    name: "Dr. Som Channsivmey",
    title: "Head, Department of Mobile Legends: Bang Bang",
    imageUrl: "/meymey_siv.png",
  }),
);

export default function ResearchersSection() {
  return (
    <section className="py-16 md:py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SecondarySectionHeader
          title="Our Researchers"
          description="Meet the brilliant minds behind our research initiatives."
        />

        {/* Optional Search/Filter - adds interactivity */}
        {/* <SearchBar /> */}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10 md:gap-y-12">
          {RESEARCHERS.map((researcher, index) => (
            <ResearcherCard
              key={researcher.id}
              researcher={researcher}
              index={index}
            />
          ))}
        </div>

        {/* Load More Button (Optional) */}
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
