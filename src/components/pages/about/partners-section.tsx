import { useEffect, useState } from "react";
import SecondarySectionHeader from "@/components/common/secondary-section-header";
import { fetchPartners } from "@/services/dataService";
import type { PartnerData } from "@/types";

export default function PartnersSection() {
  const [partners, setPartners] = useState<PartnerData[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    fetchPartners().then(setPartners);
  }, []);

  return (
    <div className="max-w-7xl mx-auto mb-10 px-6 py-10 bg-white font-sans">
      {/* Header */}
      <SecondarySectionHeader
        title="Our Partner"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus
        felis tellus, a tincidunt lorem tempus a. Quisque ut pulvinar urna.
        Vestibulum nisi dolor, pretium eu tortor id, commodo venenatis lectus.
        Integer nisl libero, interdum hendrerit libero ac, imperdiet consectetur
        velit. Ut bibendum sem turpis, eget ullamcorper ligula luctus id."
      />

      <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
        {partners.map((p, i) => (
          <div
            key={p.id}
            title={p.name}
            className="cursor-pointer"
            style={{
              filter:
                hovered === i
                  ? "grayscale(0%) opacity(1)"
                  : "grayscale(100%) opacity(0.5)",
              transform: hovered === i ? "scale(1.1)" : "scale(1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={p.logoUrl}
              alt={p.name}
              className="object-contain w-16 h-16 sm:w-20 sm:h-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
