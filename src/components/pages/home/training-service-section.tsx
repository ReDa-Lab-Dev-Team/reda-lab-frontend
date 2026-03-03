import { Button } from "@/components/ui/button";
import { type TrainingCardProps, TrainingCard } from "./training-card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PrimarySectionHeader from "@/components/common/primary-section-header";

const trainingServices: TrainingCardProps[] = [
  {
    title: "Introduction to Power BI",
    description:
      "Learn how to connect to and visualize data, growing skills that help drive a data culture so that everyone can make better decisions based on data.",
    duration: "24 hours",
    price: "$120",
    lecturer: "Dr. PHAUK Sokkhey",
  },
  {
    title: "Advanced Excel for Business Analytics",
    description:
      "Master advanced Excel functions, pivot tables, and data visualization techniques to transform raw data into actionable business insights and reports.",
    duration: "18 hours",
    price: "$95",
    lecturer: "Prof. Ngen Tina",
  },
  {
    title: "Python for Data Science",
    description:
      "Build a strong foundation in Python programming for data analysis, including libraries like Pandas, NumPy, and Matplotlib for real-world data applications.",
    duration: "30 hours",
    price: "$150",
    lecturer: "Prof. Phat Soma Nita",
  },
  {
    title: "Data Storytelling with Tableau",
    description:
      "Discover how to create compelling visual narratives with Tableau. Learn to design interactive dashboards that communicate complex data with clarity and impact.",
    duration: "20 hours",
    price: "$110",
    lecturer: "Aldous",
  },
  {
    title: "SQL for Data Analysis",
    description:
      "Develop practical SQL skills to query, filter, and aggregate data from databases. Perfect for aspiring data analysts and business intelligence professionals.",
    duration: "16 hours",
    price: "$85",
    lecturer: "Leomord",
  },
];

export default function TrainingSection() {
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
            {trainingServices.map((service, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
              >
                <TrainingCard {...service} />
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
