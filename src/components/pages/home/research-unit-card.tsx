import React from "react";
import { Cpu, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// --- Types ---
type ResearchUnitProps = {
  title: string;
  description: string;
  coreTheme: string;
  leaders: string[];
  imageUrl?: string;
};

const ResearchUnitCard: React.FC<ResearchUnitProps> = ({
  title,
  description,
  coreTheme,
  leaders,
  imageUrl,
}) => {
  return (
    <div className="relative group">
      {/* Background decorative blob */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

      <div className="relative flex flex-col md:flex-row bg-[#0f3a5c] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        {/* Left Side: Image Area */}
        <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f3a5c] via-transparent to-transparent md:bg-gradient-to-r z-10" />
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Mobile-only overlay text if needed, or just keep clean */}
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
            {description}
          </p>

          {/* Meta Data Grid */}
          <div className="space-y-6 mb-8">
            {/* Core Theme */}
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-500/20 rounded-lg shrink-0">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-1">
                  Core Theme
                </h4>
                <p className="text-slate-300 text-sm md:text-base">
                  {coreTheme}
                </p>
              </div>
            </div>

            {/* Leaders */}
            <div className="flex items-start gap-4">
              <div className="p-2 bg-indigo-500/20 rounded-lg shrink-0">
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-indigo-200 uppercase tracking-wider mb-1">
                  Leaders
                </h4>
                <div className="flex flex-wrap gap-2">
                  {leaders.map((leader, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-800 cursor-default"
                    >
                      {leader}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-auto">
            <Button className="bg-white text-[#0f3a5c] hover:bg-blue-50 font-semibold px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:-translate-y-1 group/btn">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ResearchUnitCard, type ResearchUnitProps };
