// ResearchUnitsCarousel.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResearchUnit {
  id: number;
  title: string;
  description: string[];
  image: string;
  badge?: string;
  badgeColor?: string;
  footerText?: string;
}

const researchUnits: ResearchUnit[] = [
  {
    id: 1,
    title: 'Advanced Materials Lab',
    description: [
      'Welcome to the Advanced Materials Laboratory, a premier research facility dedicated to developing next-generation sustainable materials for aerospace and biomedical applications.',
      'With state-of-the-art characterization tools, interdisciplinary collaboration frameworks, and a vibrant innovation program, we are proud to foster a thriving research community rooted in scientific excellence. At AML, we are committed to inspiring each researcher to reach their full potential in a supportive and nurturing environment.',
    ],
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800',
    badge: 'AM',
    badgeColor: '#8b1a2a',
    footerText: 'We are proud to partner with leading industry partners and provide cutting-edge research for weekly publications and annual conferences at international venues.',
  },
  {
    id: 2,
    title: 'Quantum Computing Institute',
    description: [
      'Welcome to the Quantum Computing Institute, a premier research center dedicated to pioneering quantum algorithms and error correction protocols for next-generation computing.',
      'With small research teams, exceptional mentorship programs, outstanding publication records, and a vibrant collaboration network, we are proud to foster a thriving community rooted in strong academic values. At QCI, we are committed to inspiring each researcher to reach their full potential.',
    ],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    badge: 'QC',
    badgeColor: '#1e3a5f',
    footerText: 'We are proud to be affiliated with national laboratories and provide research opportunities for weekly seminars and annual symposiums at premier venues.',
  },
  {
    id: 3,
    title: 'Climate Research Center',
    description: [
      'Welcome to the Climate Research Center, a premier interdisciplinary facility dedicated to understanding and mitigating the impacts of global climate change through data-driven research.',
      'With advanced modeling capabilities, exceptional field research opportunities, outstanding grant funding, and a vibrant outreach program, we are proud to foster a thriving community rooted in environmental stewardship. At CRC, we are committed to inspiring each scientist to reach their full potential.',
    ],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    badge: 'CR',
    badgeColor: '#2d5a3d',
    footerText: 'We are proud to collaborate with international agencies and provide research data for weekly reports and annual assessments at global climate summits.',
  },
  {
    id: 4,
    title: 'Neuroscience Discovery Lab',
    description: [
      'Welcome to the Neuroscience Discovery Laboratory, a premier research facility dedicated to unraveling the mysteries of brain function and developing treatments for neurological disorders.',
      'With advanced imaging technologies, exceptional clinical partnerships, outstanding breakthrough discoveries, and a vibrant training program, we are proud to foster a thriving community rooted in medical innovation. At NDL, we are committed to inspiring each researcher to reach their full potential.',
    ],
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
    badge: 'ND',
    badgeColor: '#4a2c7a',
    footerText: 'We are proud to be associated with teaching hospitals and provide research findings for weekly case reviews and annual presentations at medical congresses.',
  },
  {
    id: 5,
    title: 'Robotics & AI Lab',
    description: [
      'Welcome to the Robotics and AI Laboratory, a premier research facility dedicated to developing intelligent autonomous systems for manufacturing, healthcare, and exploration.',
      'With cutting-edge hardware platforms, exceptional industry partnerships, outstanding competition records, and a vibrant maker culture, we are proud to foster a thriving community rooted in engineering excellence. At RAI, we are committed to inspiring each engineer to reach their full potential.',
    ],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    badge: 'RA',
    badgeColor: '#c4a35a',
    footerText: 'We are proud to partner with technology companies and provide prototype demonstrations for weekly showcases and annual expos at innovation hubs.',
  },
  {
    id: 6,
    title: 'Biotechnology Hub',
    description: [
      'Welcome to the Biotechnology Hub, a premier research facility dedicated to advancing genetic engineering, synthetic biology, and pharmaceutical development.',
      'With world-class bioreactors, exceptional regulatory expertise, outstanding patent portfolios, and a vibrant startup ecosystem, we are proud to foster a thriving community rooted in life sciences innovation. At BTH, we are committed to inspiring each scientist to reach their full potential.',
    ],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
    badge: 'BT',
    badgeColor: '#8b4513',
    footerText: 'We are proud to collaborate with pharmaceutical leaders and provide research compounds for weekly trials and annual reviews at regulatory meetings.',
  },
  {
    id: 7,
    title: 'Space Systems Research',
    description: [
      'Welcome to the Space Systems Research group, a premier research facility dedicated to satellite technology, orbital mechanics, and deep space exploration systems.',
      'With advanced simulation environments, exceptional agency partnerships, outstanding mission contributions, and a vibrant public engagement program, we are proud to foster a thriving community rooted in aerospace excellence. At SSR, we are committed to inspiring each researcher to reach their full potential.',
    ],
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
    badge: 'SS',
    badgeColor: '#1a1a2e',
    footerText: 'We are proud to be contractor to space agencies and provide mission analysis for weekly briefings and annual launches at international spaceports.',
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds

const ResearchUnitsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const currentUnit = researchUnits[currentIndex];
  const totalUnits = researchUnits.length;

  const goToNext = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % totalUnits);
  }, [totalUnits]);

  const goToPrev = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + totalUnits) % totalUnits);
  }, [totalUnits]);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  // Pause auto-play on user interaction
  const handleManualNav = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false);
    if (direction === 'next') goToNext();
    else goToPrev();
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const formattedIndex = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(totalUnits).padStart(2, '0');

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Circular Image */}
          <div className="flex flex-col items-center">
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
              {/* Circular Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                <img
                  src={currentUnit.image}
                  alt={currentUnit.title}
                  className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                  }`}
                />
                
                {/* Badge Overlay */}
                {currentUnit.badge && (
                  <div 
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg border-2 border-white/30"
                    style={{ backgroundColor: currentUnit.badgeColor }}
                  >
                    {currentUnit.badge}
                  </div>
                )}
              </div>
            </div>

            {/* Footer Text */}
            {currentUnit.footerText && (
              <p className="mt-6 sm:mt-8 text-center text-gray-500 text-sm sm:text-base italic max-w-md px-4 leading-relaxed">
                {currentUnit.footerText}
              </p>
            )}

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 mt-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleManualNav('prev')}
                className="w-10 h-10 rounded-full hover:bg-gray-100 text-[#8b1a2a] transition-all duration-300 hover:scale-110"
                aria-label="Previous research unit"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>

              <span className="text-lg sm:text-xl font-medium text-gray-700 tracking-wider min-w-[80px] text-center">
                {formattedIndex} / {formattedTotal}
              </span>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleManualNav('next')}
                className="w-10 h-10 rounded-full hover:bg-gray-100 text-[#8b1a2a] transition-all duration-300 hover:scale-110"
                aria-label="Next research unit"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Progress Indicator */}
            <div className="flex gap-2 mt-4">
              {researchUnits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setDirection(index > currentIndex ? 'right' : 'left');
                    setCurrentIndex(index);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentIndex 
                      ? 'w-8 bg-[#8b1a2a]' 
                      : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to research unit ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col space-y-6 lg:pl-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 leading-tight">
              {currentUnit.title}
            </h2>

            <div className="space-y-4">
              {currentUnit.description.map((paragraph, index) => (
                <p 
                  key={`${currentUnit.id}-${index}`}
                  className={`text-gray-600 text-base sm:text-lg leading-relaxed transition-all duration-500 ${
                    index === 1 ? 'font-medium text-gray-700' : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                className="bg-[#8b1a2a] hover:bg-[#6b1420] text-white rounded-full px-8 py-6 text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg"
              >
                Learn More About This Unit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for slide animations */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ResearchUnitsCarousel;