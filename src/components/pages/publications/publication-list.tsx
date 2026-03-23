import { useState } from "react";
import PaperCard from "@/components/common/paper-card";
import { Award, BookOpen } from "lucide-react";
import type { PublicationPaper } from "@/types/publication-paper";
import YearFilter from "@/components/common/year-filter";
import { Button } from "@/components/ui/button";

export default function PublicationList({
  popularPapers,
  archivedPapersByYear,
}: {
  popularPapers: PublicationPaper[];
  archivedPapersByYear: Record<number, PublicationPaper[]>;
}) {
  const years = Object.keys(archivedPapersByYear)
    .map(Number)
    .sort((a, b) => b - a);
  const [activeYear, setActiveYear] = useState(
    years[0] ?? new Date().getFullYear(),
  );
  const archivedPapers = archivedPapersByYear[activeYear] ?? [];

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-900 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* --- Most Popular Section --- */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">
              Most Popular papers
            </h2>
          </div>

          {/* 2x2 Grid (Responsive: 1 col mobile, 2 col desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularPapers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>

          <div className="text-center mt-12 pb-6">
            <Button className="bg-[#0f3a5d] text-white px-8 py-3 rounded-full font-medium hover:bg-[#164771] transition shadow-lg hover:shadow-xl">
              Find More Popular Paper
            </Button>
          </div>
        </section>

        {/* --- Previous Papers Section --- */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">
              Previous papers
            </h2>
          </div>

          <YearFilter
            years={years}
            activeYear={activeYear}
            onChange={setActiveYear}
          />

          {/* 2x3 Grid (Responsive: 1 col mobile, 2 col tablet, 3 col desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archivedPapers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>

          <div className="text-center mt-12 pb-6">
            <Button className="bg-[#0f3a5d] text-white px-8 py-3 rounded-full font-medium hover:bg-[#164771] transition shadow-lg hover:shadow-xl">
              Find More Archived Papers
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
