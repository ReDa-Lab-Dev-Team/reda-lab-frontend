import SecondarySectionHeader from "@/components/common/secondary-section-header";
import { CaroucelImages, type Slides } from "./carousel-images";
import { PillarSection, type Pillar } from "./pillar-section";
import { Goal, HeartPlus, Eye } from "lucide-react";

const slidesData: Slides[] = [
  {
    id: 1,
    src: "/meymey_siv_aquared.png",
    alt: "Slide 1",
    backgroundColor: "#f0f0f0",
  },
  {
    id: 2,
    src: "/project-image-01.png",
    alt: "Slide 2",
    backgroundColor: "#e0e0e0",
  },
];

const pillars: Pillar[] = [
  {
    title: "Our Mission",
    icon: <Goal className="w-12 h-12" color="#1a3a5c" />,
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Cras aliquam est et diam rhoncus, eu fermentum enim rhoncus.",
      "Sed viverra nibh nec finibus sagittis.",
      "Praesent interdum justo nec arcu porta pharetra.",
    ],
  },
  {
    title: "Our Vision",
    icon: <Eye className="w-12 h-12 text-[#1a3a5c]" />,
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Cras aliquam est et diam rhoncus, eu fermentum enim rhoncus.",
      "Sed viverra nibh nec finibus sagittis.",
      "Praesent interdum justo nec arcu porta pharetra.",
    ],
  },
  {
    title: "Our Values",
    icon: <HeartPlus className="w-12 h-12 text-[#1a3a5c]" />,
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Cras aliquam est et diam rhoncus, eu fermentum enim rhoncus.",
      "Sed viverra nibh nec finibus sagittis.",
      "Praesent interdum justo nec arcu porta pharetra.",
    ],
  },
];

export default function AboutRedaSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 font-sans">
      {/* Header */}
      <SecondarySectionHeader
        title="About ReDA Lab"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      {/* Carousel */}
      <CaroucelImages slides={slidesData} />

      {/* Mission / Vision / Values */}
      <PillarSection pillars={pillars} />
    </section>
  );
}
