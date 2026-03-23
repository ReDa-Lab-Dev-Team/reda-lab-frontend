import React from "react";
import { FileText, Users, Target } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, label, value }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-3 text-slate-900">{icon}</div>
    <p className="text-sm font-medium text-slate-600 mb-1">{label}</p>
    <p className="text-3xl md:text-4xl font-bold text-slate-900">{value}</p>
  </div>
);

export default function PublicationTitle() {
  const stats = [
    {
      icon: <FileText className="w-8 h-8 md:w-10 md:h-10" />,
      label: "Total Papers",
      value: "+ 150",
    },
    {
      icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
      label: "Authors",
      value: "+60",
    },
    {
      icon: <Target className="w-8 h-8 md:w-10 md:h-10" />,
      label: "Impact",
      value: "+20",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Illustration */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm md:max-w-md">
              {/* Research Papers Illustration */}
              <svg
                viewBox="0 0 400 300"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background paper */}
                <rect
                  x="60"
                  y="40"
                  width="200"
                  height="260"
                  rx="4"
                  fill="#f8fafc"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                />

                {/* Front paper */}
                <rect
                  x="80"
                  y="20"
                  width="200"
                  height="260"
                  rx="4"
                  fill="white"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />

                {/* Header section with circle */}
                <circle
                  cx="140"
                  cy="70"
                  r="25"
                  fill="#3b82f6"
                  fillOpacity="0.2"
                />
                <circle
                  cx="140"
                  cy="70"
                  r="18"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  fill="none"
                />

                {/* Lines representing text */}
                <rect
                  x="180"
                  y="55"
                  width="80"
                  height="8"
                  rx="2"
                  fill="#e2e8f0"
                />
                <rect
                  x="180"
                  y="70"
                  width="60"
                  height="6"
                  rx="2"
                  fill="#e2e8f0"
                />
                <rect
                  x="180"
                  y="82"
                  width="70"
                  height="6"
                  rx="2"
                  fill="#e2e8f0"
                />

                {/* Grid/Table section */}
                <rect
                  x="100"
                  y="110"
                  width="160"
                  height="80"
                  rx="2"
                  fill="#f1f5f9"
                />

                {/* Grid lines */}
                <line
                  x1="100"
                  y1="140"
                  x2="260"
                  y2="140"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
                <line
                  x1="100"
                  y1="170"
                  x2="260"
                  y2="170"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
                <line
                  x1="153"
                  y1="110"
                  x2="153"
                  y2="190"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
                <line
                  x1="206"
                  y1="110"
                  x2="206"
                  y2="190"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />

                {/* Chart bars */}
                <rect
                  x="100"
                  y="210"
                  width="30"
                  height="50"
                  rx="2"
                  fill="#0ea5e9"
                />
                <rect
                  x="140"
                  y="230"
                  width="30"
                  height="30"
                  rx="2"
                  fill="#0ea5e9"
                  fillOpacity="0.7"
                />
                <rect
                  x="180"
                  y="220"
                  width="30"
                  height="40"
                  rx="2"
                  fill="#f97316"
                />
                <rect
                  x="220"
                  y="240"
                  width="30"
                  height="20"
                  rx="2"
                  fill="#ef4444"
                />
              </svg>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Publication Highlights
            </h2>

            <blockquote className="text-lg md:text-xl text-slate-700 italic mb-10 md:mb-12 leading-relaxed">
              "Our research contributions published in leading journals and
              conferences"
            </blockquote>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <StatItem
                  key={index}
                  icon={stat.icon}
                  label={stat.label}
                  value={stat.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
