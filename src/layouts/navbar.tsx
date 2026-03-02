import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Research Unit", href: "#research" },
    { name: "Training Services", href: "#training" },
    { name: "Community", href: "#community" },
    { name: "Publication", href: "#publication" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary shadow-lg py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-auto h-10 rounded-full flex items-center justify-center text-[#0f3a5d] font-bold text-xl">
              <img
                src={`${scrolled ? "/ReDa-Icon.png" : "/ReDa-Icon-Blue.png"}`}
                alt="ReDA Lab Logo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* <div className="text-white">
              <h1 className="font-bold text-lg leading-none">ReDA Lab</h1>
              <span className="text-xs text-blue-200">
                Research & Data Analytics
              </span>
            </div> */}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${scrolled ? "text-white hover:text-yellow-400" : "text-primary hover:text-yellow-400"}`}
              >
                {link.name}
              </a>
            ))}
            <Button
              className={`bg-white/10 p-2 rounded-full hover:bg-white/20 transition ${scrolled ? "text-white" : "text-primary"}`}
            >
              <Search size={18} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className={
                scrolled ? "bg-white text-primary" : "bg-primary text-white"
              }
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className={`md:hidden bg-primary ${scrolled ? "bg-primary border-primary" : "bg-white border-white"} border-t  absolute w-full`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-3 text-base font-medium ${scrolled ? "text-white hover:bg-blue-800" : "text-primary hover:bg-blue-100"} rounded-md`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
