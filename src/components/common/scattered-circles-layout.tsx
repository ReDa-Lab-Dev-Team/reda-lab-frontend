import { Link } from "react-router-dom";
import type { ResearchUnitData } from "@/types";

interface ScatteredCirclesLayoutProps {
  title?: string;
  subtitle?: string;
  items: ResearchUnitData[];
  showDiscoverButton?: boolean;
}

export default function ScatteredCirclesLayout({
  title = "Our holistic approach",
  subtitle = "LEARNING AT WORAWA",
  items,
  showDiscoverButton = true,
}: ScatteredCirclesLayoutProps) {
  // Positions for up to 5 items to mimic the scattered layout around a center
  const positions = [
    { top: "5%", left: "28%", width: "w-32 md:w-44 lg:w-48", height: "h-32 md:h-44 lg:h-48" },
    { top: "15%", right: "8%", width: "w-28 md:w-40 lg:w-44", height: "h-28 md:h-40 lg:h-44" },
    { top: "45%", left: "2%", width: "w-36 md:w-48 lg:w-56", height: "h-36 md:h-48 lg:h-56" },
    { bottom: "8%", left: "32%", width: "w-32 md:w-44 lg:w-48", height: "h-32 md:h-44 lg:h-48" },
    { bottom: "22%", right: "12%", width: "w-32 md:w-44 lg:w-48", height: "h-32 md:h-44 lg:h-48" },
  ];

  return (
    <div className="w-full py-16 md:py-24 relative overflow-hidden bg-[#fcfcfc]">
      {/* Background radial subtle accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gray-100 mix-blend-multiply blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gray-100 mix-blend-multiply blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-[700px] lg:min-h-[800px]">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center mb-16 lg:mb-0 z-20">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
              {subtitle}
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2a2a2a] leading-[1.1] mb-10">
              {title}
            </h2>
            {showDiscoverButton && (
              <div>
                <Link 
                  to="/research"
                  className="inline-block bg-[#FBB03B] hover:bg-[#e59d28] text-gray-900 font-bold px-8 py-3.5 rounded-full transition-colors text-xs md:text-sm uppercase tracking-widest shadow-sm"
                >
                  DISCOVER MORE
                </Link>
              </div>
            )}
          </div>

          {/* Right Scattered Circles Column */}
          <div className="w-full lg:w-2/3 relative h-[600px] md:h-[700px] lg:h-auto min-h-[600px] lg:ml-8">
            
            {/* Center Circle (ReDA) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden flex flex-col items-center justify-center bg-[#2a2a2a] shadow-2xl border-4 md:border-[6px] border-white">
              <div className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold">ReDA</div>
              <div className="text-gray-300 text-[10px] md:text-xs tracking-[0.2em] mt-2 uppercase">Research</div>
            </div>

            {/* Surrounding Circles */}
            {items.slice(0, 5).map((unit, index) => {
              const pos = positions[index] || positions[0];
              return (
                <div 
                  key={unit.id}
                  className={`absolute rounded-full overflow-hidden shadow-xl border-4 md:border-[6px] border-white ${pos.width} ${pos.height}`}
                  style={{
                    top: pos.top,
                    bottom: pos.bottom,
                    left: pos.left,
                    right: pos.right,
                  }}
                >
                  {unit.imageUrl ? (
                    <img 
                      src={unit.imageUrl} 
                      alt={unit.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4 md:p-6 text-center">
                    <span className="text-white font-bold text-sm md:text-base lg:text-lg leading-snug drop-shadow-md">
                      {unit.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
