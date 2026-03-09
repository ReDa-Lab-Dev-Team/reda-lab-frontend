import { useEffect, useRef, useState } from "react";

type HeroSecondaryProps = {
  topText: string;
  mainTitle: string;
  bottomText: string;
  imageSrc?: string;
};
const defaultImage = "/ITC2.png";

export default function HeroSecondary({
  topText,
  mainTitle,
  bottomText,
  imageSrc,
}: HeroSecondaryProps) {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full overflow-hidden min-h-[clamp(300px,45vw,560px)] ${loaded ? "loaded" : ""}`}
    >
      {/* Parallax BG */}
      <div
        className="absolute inset-0 w-full"
        style={{
          transform: `translateY(${scrollY * 0.22}px)`,
          top: `-${scrollY * 0.22}px`,
          bottom: 0,
        }}
      >
        <img
          src={imageSrc || defaultImage}
          alt="Our team"
          className="w-full h-full object-cover object-center saturate-50 brightness-50"
        />
      </div>

      {/* Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.75),  rgba(0, 89, 149, 0.6))",
        }}
      />
      {/* Background dark color */}
      <div
        className="absolute inset-0 bg-black bg-opacity-10 z-0"
        // className="absolute inset-0 z-0"
        aria-hidden="true"
      ></div>

      {/* Corner brackets */}
      {[
        "top-6 left-6 sm:top-10 sm:left-10 border-t border-l",
        "top-6 right-6 sm:top-10 sm:right-10 border-t border-r",
        "bottom-6 left-6 sm:bottom-10 sm:left-10 border-b border-l",
        "bottom-6 right-6 sm:bottom-10 sm:right-10 border-b border-r",
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute w-8 h-8 sm:w-11 sm:h-11 ${cls} border-white transition-transform duration-800 ease-in-out ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-6 py-20 sm:py-28 md:py-36 text-center">
        <div className="inline-block overflow-hidden mb-4">
          <p
            className={`inline-block font-jost font-extralight tracking-widest uppercase text-white text-[10px] sm:text-xs transition-transform duration-800 ease-in-out ${loaded ? "translate-y-0 opacity-100 delay-150" : "translate-y-full opacity-0"}`}
          >
            {topText}
          </p>
        </div>

        <div
          className={`h-px w-0 bg-white transition-all duration-1000 ease-in-out delay-400 mb-6 sm:mb-8 mx-auto ${loaded ? "w-20" : "w-0"}`}
        />

        <div className="inline-block overflow-hidden">
          <h1
            className={`inline-block font-cormorant font-light tracking-wide uppercase text-white transition-transform duration-1100 ease-in-out ${loaded ? "translate-y-0 opacity-100 delay-350" : "translate-y-full opacity-0"}`}
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", lineHeight: 1.05 }}
          >
            {mainTitle}
          </h1>
        </div>

        <div
          className={`h-px w-0 bg-white transition-all duration-1000 ease-in-out delay-600 mt-6 sm:mt-8 mx-auto ${loaded ? "w-20" : "w-0"}`}
        />

        <div className="inline-block overflow-hidden mt-5">
          <p
            className={`inline-block font-jost font-extralight tracking-widest uppercase text-white text-[9px] sm:text-xs transition-transform duration-800 ease-in-out ${loaded ? "translate-y-0 opacity-100 delay-550" : "translate-y-full opacity-0"}`}
          >
            {bottomText}
          </p>
        </div>
      </div>
    </section>
  );
}
