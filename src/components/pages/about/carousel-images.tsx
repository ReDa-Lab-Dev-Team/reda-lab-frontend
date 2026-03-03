import { Button } from "@/components/ui/button";
import { useState } from "react";

type Slides = {
  id: number;
  src: string;
  alt: string;
  backgroundColor?: string;
};

type CaroucelImagesProps = {
  slides: Slides[];
};

export const CaroucelImages = ({ slides }: CaroucelImagesProps) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  return (
    <>
      {/* Carousel */}
      <div className="relative flex items-center justify-center mb-12">
        {/* Prev button */}
        <Button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 bg-white shadow hover:bg-gray-100 transition"
          style={{ color: "#1a3a5c" }}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Button>

        {/* Slide */}
        <div
          className="w-full max-w-lg mx-12 rounded-xl overflow-hidden transition-all duration-500"
          style={{
            backgroundColor: slides[current].backgroundColor || "transparent",
            aspectRatio: "16/9",
            minHeight: "180px",
          }}
        >
          <img
            src={slides[current].src}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Next button */}
        <Button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 z-10 flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 bg-white shadow hover:bg-gray-100 transition"
          style={{ color: "#1a3a5c" }}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mb-14">
        {slides.map((_, i) => (
          <Button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="w-2.5 h-2.5 rounded-full border transition-all duration-300"
            style={{
              backgroundColor: i === current ? "#1a3a5c" : "transparent",
              borderColor: i === current ? "#1a3a5c" : "#9ca3af",
            }}
          />
        ))}
      </div>
    </>
  );
};

export { type Slides };
