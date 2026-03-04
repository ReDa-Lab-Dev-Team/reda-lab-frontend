import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { type TrainingCardProps, TrainingCard } from "./training-card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PrimarySectionHeader from "@/components/common/primary-section-header";
import { fetchTrainings } from "@/services/dataService";
import type { TrainingData } from "@/types";

const toCardProps = (d: TrainingData): TrainingCardProps => ({
  title: d.title,
  description: d.description,
  duration: d.duration,
  price: d.price,
  lecturer: d.lecturer,
});

export default function TrainingSection() {
  const [trainings, setTrainings] = useState<TrainingData[]>([]);

  useEffect(() => {
    fetchTrainings().then(setTrainings);
  }, []);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <section id="training" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrimarySectionHeader
          title="Our Training Services"
          className="text-primary"
        />

        {/* Carousel */}
        <div className="overflow-hidden pb-6" ref={emblaRef}>
          <div className="flex">
            {trainings.map((service) => (
              <div
                key={service.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
              >
                <TrainingCard {...toCardProps(service)} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 pb-6">
          <Button className="bg-[#0f3a5d] text-white px-8 py-3 rounded-full font-medium hover:bg-[#164771] transition shadow-lg hover:shadow-xl">
            Find More Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
