import React from 'react';
import { Phone, Plus, Twitter, Facebook, Instagram, Youtube, MoreHorizontal } from 'lucide-react';

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
          {/* Center Column - Map */}
<div className="flex justify-center order-1 md:order-2">
  <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-lg bg-gray-100">

    <iframe
      title="Google Map Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46497.18869700577!2d104.89574171072076!3d11.573682094324232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095135c2ad598d%3A0xb2d48d6f11032091!2sDepartment%20of%20Applied%20Mathematics%20and%20Statistics%20(AMS)!5e1!3m2!1sen!2skh!4v1781492365955!5m2!1sen!2skh"
      className="w-full h-full border-0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />

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