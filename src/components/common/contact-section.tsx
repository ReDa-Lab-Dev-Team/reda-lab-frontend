import React from 'react';
import { MapPin, Phone, Plus, Twitter, Facebook, Instagram, Youtube, MoreHorizontal } from 'lucide-react';

const ContactSection: React.FC = () => {
  const quickLinks = [
    { label: 'NEWS', hasExpand: true },
    { label: 'ADMISSIONS', hasExpand: true },
    { label: 'TERM DATES', hasExpand: true },
    { label: 'CO-CURRICULUM', hasExpand: true },
    { label: 'FEES', hasExpand: true },
    { label: 'SCHOOL BUS ROUTES', hasExpand: true },
  ];

  const navItems = [
    { label: 'ENQUIRE', hasExpand: true },
    { label: 'VISIT', hasExpand: true },
    { label: 'APPLY', hasExpand: true },
  ];

  return (
    <section className="relative w-full bg-[#1e3a5f] text-white py-12 sm:py-16 lg:py-20">

      {/* Header */}
      <div className="text-center px-4 mb-10 sm:mb-14 lg:mb-16 pt-8 sm:pt-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-2">
          FOLLOW YOUR HEART
        </h2>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic font-serif">
          & Join Us Today
        </p>
      </div>

      {/* Navigation Tabs with Divider Lines */}
      <div className="flex items-center justify-center mb-12 sm:mb-16 lg:mb-20 px-4">
        {/* Left Line */}
        <div className="hidden sm:block flex-1 h-[1px] bg-white/40 max-w-[120px] lg:max-w-[200px]" />
        
        {/* Nav Items */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-16 px-4 sm:px-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-2 text-sm sm:text-base font-semibold tracking-wider hover:text-[#c4a35a] transition-colors group"
            >
              {item.label}
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          ))}
        </div>
        
        {/* Right Line */}
        <div className="hidden sm:block flex-1 h-[1px] bg-white/40 max-w-[120px] lg:max-w-[200px]" />
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Address & Contact */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4 order-2 md:order-1">
            <div className="space-y-1">
              <p className="text-base sm:text-lg">Old St Mellons Cardiff</p>
              <p className="text-base sm:text-lg">CF3 5YX</p>
            </div>
            
            <button className="flex items-center gap-2 text-sm font-semibold tracking-wider hover:text-[#c4a35a] transition-colors group mt-2">
              GET DIRECTIONS
              <Plus className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" />
            </button>
            
            <button className="flex items-center gap-2 text-sm font-semibold tracking-wider hover:text-[#c4a35a] transition-colors group">
              <Phone className="w-3 h-3" />
              +44 (0)29 2077 8936
              <Plus className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>

          {/* Center Column - Map */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square bg-gray-100 rounded-sm overflow-hidden shadow-lg">
              {/* Map Placeholder - Replace with actual map component or image */}
              <div className="absolute inset-0 bg-gray-200">
                <img
                  src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/-3.05,51.52,10,0/400x400?access_token=YOUR_TOKEN"
                  alt="Location Map"
                  className="w-full h-full object-cover opacity-90"
                  onError={(e) => {
                    // Fallback if map image fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Map Pin Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <MapPin className="w-10 h-10 text-[#8b1a2a] fill-[#8b1a2a]" strokeWidth={1.5} />
                  </div>
                </div>
                {/* Additional location pins */}
                <div className="absolute top-[35%] right-[25%]">
                  <MapPin className="w-5 h-5 text-[#c4a35a] fill-[#c4a35a]" strokeWidth={1.5} />
                </div>
                <div className="absolute bottom-[30%] left-[30%]">
                  <MapPin className="w-5 h-5 text-[#c4a35a] fill-[#c4a35a]" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4 order-3">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                className="flex items-center gap-3 text-sm sm:text-base font-medium tracking-wider hover:text-[#c4a35a] transition-colors group"
              >
                {link.label}
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-45 transition-transform duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - Social Links */}
      <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4">
        <span className="text-sm sm:text-base font-medium">Follow Us</span>
        
        <div className="flex items-center gap-4 sm:gap-5">
          <a 
            href="#" 
            className="hover:text-[#c4a35a] transition-colors hover:scale-110 transform duration-200"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a 
            href="#" 
            className="hover:text-[#c4a35a] transition-colors hover:scale-110 transform duration-200"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a 
            href="#" 
            className="hover:text-[#c4a35a] transition-colors hover:scale-110 transform duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a 
            href="#" 
            className="hover:text-[#c4a35a] transition-colors hover:scale-110 transform duration-200"
            aria-label="YouTube"
          >
            <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a 
            href="#" 
            className="hover:text-[#c4a35a] transition-colors hover:scale-110 transform duration-200"
            aria-label="More"
          >
            <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
        
        <span className="text-sm sm:text-base text-white/80">/SJCCardiff</span>
      </div>
    </section>
  );
};

export default ContactSection;