import { useEffect, useState } from "react";
import SecondarySectionHeader from "@/components/common/secondary-section-header";
import { CarouselImages, type Slides } from "./carousel-images";
import PillarCards from "./pillar-cards";
import { fetchAboutSlides, fetchPillars } from "@/services/dataService";
import type { AboutSlideData, PillarData } from "@/types";

const toSlide = (d: AboutSlideData): Slides => ({
  id: d.id,
  src: d.src,
  alt: d.alt,
  backgroundColor: d.backgroundColor,
});

export default function AboutRedaSection() {
  const [slides, setSlides] = useState<AboutSlideData[]>([]);
  const [pillars, setPillars] = useState<PillarData[]>([]);

  useEffect(() => {
    fetchAboutSlides().then((data) => {
      // console.log("Fetch slides: ", data);
      setSlides(data);
    });
    fetchPillars().then((data) => {
      // console.log("Fetch pillars: ", data);
      setPillars(data);
    });
  }, []);

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
      {slides.length > 0 && <CarouselImages slides={slides.map(toSlide)} />}

      {/* Mission / Vision / Values */}
      {pillars.length > 0 && <PillarCards pillars={pillars} />}
    </section>
  );
}
