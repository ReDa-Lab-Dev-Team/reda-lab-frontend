// ResearchAchievements.tsx
import React, { useState, useEffect, useRef } from 'react';

interface AchievementStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}

const achievements: AchievementStat[] = [
  {
    value: 178,
    label: 'Research Projects Completed',
    duration: 2000,
  },
  {
    value: 2500,
    suffix: '',
    label: 'Publications',
    duration: 2500,
  },
  {
    value: 80,
    prefix: '+',
    label: 'Industry Partnerships',
    duration: 1800,
  },
  {
    value: 128,
    label: 'PhD Graduates',
    duration: 2200,
  },
];

const useCountUp = (
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
): [number, boolean] => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return [count, hasStarted];
};

const StatCard: React.FC<{ stat: AchievementStat; index: number }> = ({ stat, index }) => {
  const [count] = useCountUp(stat.value, stat.duration);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  return (
    <div
      ref={cardRef}
      className={`flex flex-col items-center text-center transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-3 sm:mb-4">
        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
          {stat.prefix}
          {formatNumber(count)}
          {stat.suffix}
        </span>
      </div>
      <p className="text-[#c4a35a] text-sm sm:text-base md:text-lg font-semibold tracking-wide uppercase">
        {stat.label}
      </p>
    </div>
  );
};

const ResearchAchievements: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#0a1f3d] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${
            headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#c4a35a] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4">
            Our Achievements
          </p>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            What We Accomplish Through The Years
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-8">
          {achievements.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAchievements;